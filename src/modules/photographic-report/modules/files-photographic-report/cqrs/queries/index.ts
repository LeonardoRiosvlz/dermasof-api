import { GetAllFilesPhotographicReportQueryHandler } from './handler/get-all-files-photographic-report-query.handler';
import { GetPaginatedFilesPhotographicReportQueryHandler } from './handler/get-paginated-files-photographic-report-query.handler';
import { GetOneFilesPhotographicReportQueryHandler } from './handler/get-one-files-photographic-report-query.handler';
import { Provider } from '@nestjs/common';

export const FilesPhotographicReportQueryHandlers:Array<Provider> = [
  GetAllFilesPhotographicReportQueryHandler,
  GetPaginatedFilesPhotographicReportQueryHandler,
  GetOneFilesPhotographicReportQueryHandler,
];
