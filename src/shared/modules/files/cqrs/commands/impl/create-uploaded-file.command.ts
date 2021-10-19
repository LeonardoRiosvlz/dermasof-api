import { AppCommand } from 'src/shared/modules/app-cqrs/base/AppCommand';
import { ICreateUploadedFile } from '../../../interfaces/IAppFilesService';


export type CreateUploadedFileDto = ICreateUploadedFile

export class CreateUploadedFileCommand extends AppCommand{
  constructor(public request: CreateUploadedFileDto) {
    super()
  }
}
