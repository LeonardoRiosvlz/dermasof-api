import { GetAllPhotographicReportQueryHandler } from './handler/get-all-photographic-report-query.handler';
import { GetPaginatedPhotographicReportQueryHandler } from './handler/get-paginated-photographic-report-query.handler';
import { GetOnePhotographicReportQueryHandler } from './handler/get-one-photographic-report-query.handler';
import { Provider } from '@nestjs/common';

export const PhotographicReportQueryHandlers:Array<Provider> = [
  GetAllPhotographicReportQueryHandler,
  GetPaginatedPhotographicReportQueryHandler,
  GetOnePhotographicReportQueryHandler,
];
