import { GetAllFilesQueryHandler } from './handler/get-all-files-query.handler';
import { GetPaginatedFilesQueryHandler } from './handler/get-paginated-files-query.handler';
import { GetOneFilesQueryHandler } from './handler/get-one-files-query.handler';
import { Provider } from '@nestjs/common';
import { GetUploadSignedUrlQueryHandler } from './handler/get-upload-signed-url.query.handler';

export const FilesQueryHandlers:Array<Provider> = [
  GetAllFilesQueryHandler,
  GetPaginatedFilesQueryHandler,
  GetOneFilesQueryHandler,
  GetUploadSignedUrlQueryHandler
];
