import { Result } from 'src/shared/core/class/result';
import { Readable } from 'stream';


export interface ICloudId {
  key: string;
  url: string;
}

export interface IUploadResult extends ICloudId {
  filename: string;
  bytes?: number;
}

export interface IUploadOptions {
  path?: string
  prefix?: boolean
}

export interface ICloudFileService {
  upload(filename: string, body: Buffer | Readable, options?: IUploadOptions): Promise<Result<IUploadResult>> | Result<IUploadResult>;

  getWriteSignedUrl(filename: string, contentType: string): Promise<Result<ICloudId>> | Result<ICloudId>;

  getReadUrl(key: string): Promise<ICloudId> | ICloudId;

  buildKey(filename: string): string;

  drop(key: string): Promise<Result<void>> | Result<void>;

  getCloudLib(): unknown
}