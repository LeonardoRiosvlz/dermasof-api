import { Injectable } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';

import { FilesEntityService } from './files-entity.service';
import { IAppFileService, ICreateUploadedFile } from '../interfaces/IAppFilesService';
import { AppError } from '../../../core/errors/AppError';
import { FileStatus, FileStorageType } from '../entities/files.entity';
import { UniqueEntityID } from '../../data-access/mongoose/UniqueEntityID';
import { AWSCloudService } from './aws-cloud.service';


@Injectable()
export class AppFilesService implements IAppFileService {
  constructor(private readonly _awsCloudService: AWSCloudService,
              private readonly _filesEntityService: FilesEntityService) {

  }


  async createUploadedFile(request: ICreateUploadedFile): Promise<Result<void>> {

    try {
      const isVideo = request?.isVideo ?? false;

      const { url } = this._awsCloudService.getReadUrl(request.key);


      const fileOrErr = await this._filesEntityService.create({
        id: new UniqueEntityID().toString(),
        key: request.key,
        status: isVideo ? FileStatus.PROCESSING : FileStatus.OK,
        storage: request.storage ?? FileStorageType.AWS,
        url,
        filename: request.key.split('/').pop(),
      });

      if (fileOrErr.isFailure) {
        return Result.Fail(fileOrErr.unwrapError());
      }

      if (request?.toRemove) {
        await this.drop(request.toRemove);
      }

      if (isVideo) {
        //Transcoder File
        //await this._cqrsBus.publishEvent()
      }
      return Result.Ok();

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }


  }


  async drop(key: string): Promise<Result<void>> {

    try {
      const removeInCloudOrErr = await this._awsCloudService.drop(key);
      const removeLocalOrErr = await this._filesEntityService.deleteOne({ key: { eq: key } });
      const combined = removeInCloudOrErr.and(removeLocalOrErr);
      if (combined.isFailure) {
        return Result.Fail(combined.unwrapError());
      }
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


}
