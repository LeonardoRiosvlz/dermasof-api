import { GetAllClinicHistoryDiagnosisQueryHandler } from './handler/get-all-clinic-history-diagnosis-query.handler';
import { GetPaginatedClinicHistoryDiagnosisQueryHandler } from './handler/get-paginated-clinic-history-diagnosis-query.handler';
import { GetOneClinicHistoryDiagnosisQueryHandler } from './handler/get-one-clinic-history-diagnosis-query.handler';
import { Provider } from '@nestjs/common';

export const ClinicHistoryDiagnosisQueryHandlers:Array<Provider> = [
  GetAllClinicHistoryDiagnosisQueryHandler,
  GetPaginatedClinicHistoryDiagnosisQueryHandler,
  GetOneClinicHistoryDiagnosisQueryHandler,
];
