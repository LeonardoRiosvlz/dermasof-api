import { GetAllClinicHistoryProcedureQueryHandler } from './handler/get-all-clinic-history-procedure-query.handler';
import { GetPaginatedClinicHistoryProcedureQueryHandler } from './handler/get-paginated-clinic-history-procedure-query.handler';
import { GetOneClinicHistoryProcedureQueryHandler } from './handler/get-one-clinic-history-procedure-query.handler';
import { Provider } from '@nestjs/common';

export const ClinicHistoryProcedureQueryHandlers:Array<Provider> = [
  GetAllClinicHistoryProcedureQueryHandler,
  GetPaginatedClinicHistoryProcedureQueryHandler,
  GetOneClinicHistoryProcedureQueryHandler,
];
