import { Result } from 'src/shared/core/class/result';
import { FileStorageType } from '../entities/files.entity';

export interface ICreateUploadedFile {
  key: string;
  storage?: FileStorageType;
  toRemove?: string;
  isVideo?: boolean;
}


export interface IAppFileService {

  createUploadedFile(params: ICreateUploadedFile): Promise<Result<void>> | Result<void>;

  drop(key: string): Promise<Result<void>> | Result<void>;
}