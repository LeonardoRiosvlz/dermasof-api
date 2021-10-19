import { CreateFilesCommandHandler } from './handler/create-files-command.handler';
import { DeleteFilesCommandHandler } from './handler/delete-files-command.handler';
import { UpdateFilesCommandHandler } from './handler/update-files-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesCommandHandler } from './handler/delete-many-files-command.handler';
import { CreateUploadedFileCommandHandler } from './handler/create-uploaded-file.command.handler';

export const FilesCommandHandlers: Array<Provider> = [
  CreateFilesCommandHandler,
  DeleteFilesCommandHandler,
  UpdateFilesCommandHandler,
  DeleteManyFilesCommandHandler,
  CreateUploadedFileCommandHandler
];
