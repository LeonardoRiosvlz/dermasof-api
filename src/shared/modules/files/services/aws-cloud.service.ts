import { ICloudFileService, ICloudId, IUploadOptions, IUploadResult } from '../interfaces/ICloudFileService';
import { Result } from 'src/shared/core/class/result';
// @ts-ignore
import { generate } from 'generate-password';
// @ts-ignore
import { ClientConfiguration } from 'aws-sdk/clients/s3';
// @ts-ignore
import { S3, Endpoint, config } from 'aws-sdk';
// @ts-ignore
import { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import SendData = ManagedUpload.SendData;
import { Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { AppError } from 'src/shared/core/errors/AppError';
import { Readable } from 'stream';


export type AWSSignedOperation = 'putObject' | 'getObject';

@Injectable()
export class AWSCloudService implements ICloudFileService {

  readonly s3: S3;

  constructor(
    private readonly _appConfig: AppConfigService,
  ) {
    config.update({
      accessKeyId: _appConfig.aws.keyId,
      secretAccessKey: _appConfig.aws.keySecret,
      region: _appConfig.aws.region,
      signatureVersion: 'v4',
    });

    const options: ClientConfiguration = {
      region: _appConfig.aws.region,
      signatureVersion: 'v4',
      endpoint: new Endpoint(`${_appConfig.aws.bucket}.s3-accelerate.amazonaws.com`),
      useAccelerateEndpoint: true,
    };

    this.s3 = new S3(options);
  }

  getCloudLib(): S3 {
    return this.s3
  }


  async upload(filename: string, body: Buffer | Readable, options: IUploadOptions = { prefix: true, path: undefined }): Promise<Result<IUploadResult>> {
    const params = {
      Bucket: this._appConfig.aws.bucket,
    };


    const prefix = generate({ length: 15, lowercase: true, symbols: false });



    const name = options && options.prefix ? `${prefix}-${filename}` : filename;
    try {
      const uploadResult: SendData = await this.s3.upload({
        ...params,
        Body: body,
        Key: `${options.path}/${name}`,
      }).promise();

      return Result.Ok({
        url: `${this._appConfig.aws.cdnUrl}/${uploadResult.Key}`,
        key: uploadResult.Key,
        filename: name,
      });

    } catch (e) {
      return Result.Fail(new AppError.UnexpectedError(e));
    }

  }

  async drop(key: string): Promise<Result<void>> {
    return new Promise((resolve, reject) => {
      this.s3.deleteObject({ Key: key, Bucket: this._appConfig.aws.bucket }, (err) => {
        if (err) {
          reject(Result.Fail(new AppError.UnexpectedError(err)))
        }
        resolve(Result.Ok())
      })
    })
  }

  getReadUrl(key: string): ICloudId {
    return {
      key: key,
      url: `${this._appConfig.aws.cdnUrl}/${key}`,
    };
  }

  async getWriteSignedUrl(filename: string, contentType: string): Promise<Result<ICloudId>> {
    const Key = this.buildKey(filename);
    return await this.getSignedUrl('putObject', Key, 30 * 60, contentType);
  }

  buildKey(filename: string): string {
    const key = String(`${this._appConfig.app.name.split(' ').join('_')}`).concat(`/${this._appConfig.app.nodeEnv}`);
    return key.concat('/assets')
      .concat(`/${generate({ uppercase: true, symbols: false, numbers: true, length: 15 })}-${filename}`);
  }

  private async getSignedUrl(operation: AWSSignedOperation, Key: string, Expires: number, ContentType?: string): Promise<Result<ICloudId>> {
    try {
      const params = {
        Bucket: this._appConfig.aws.bucket,
        Key,
        Expires,
        ContentType,
      };
      const url = await this.s3.getSignedUrlPromise(operation, params);
      return Result.Ok({
        url,
        key: Key,
      });
    } catch (e) {
      return Result.Fail(new AppError.UnexpectedError(e));
    }
  }

}