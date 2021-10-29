import { GetAllClinicHistoryQueryHandler } from './handler/get-all-clinic-history-query.handler';
import { GetPaginatedClinicHistoryQueryHandler } from './handler/get-paginated-clinic-history-query.handler';
import { GetOneClinicHistoryQueryHandler } from './handler/get-one-clinic-history-query.handler';
import { Provider } from '@nestjs/common';

export const ClinicHistoryQueryHandlers:Array<Provider> = [
  GetAllClinicHistoryQueryHandler,
  GetPaginatedClinicHistoryQueryHandler,
  GetOneClinicHistoryQueryHandler,
];
