import { GetAllDiagnosisQueryHandler } from './handler/get-all-diagnosis-query.handler';
import { GetPaginatedDiagnosisQueryHandler } from './handler/get-paginated-diagnosis-query.handler';
import { GetOneDiagnosisQueryHandler } from './handler/get-one-diagnosis-query.handler';
import { Provider } from '@nestjs/common';

export const DiagnosisQueryHandlers:Array<Provider> = [
  GetAllDiagnosisQueryHandler,
  GetPaginatedDiagnosisQueryHandler,
  GetOneDiagnosisQueryHandler,
];
