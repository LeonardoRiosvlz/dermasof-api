import { GetAllDiagnosisTypeQueryHandler } from './handler/get-all-diagnosis-type-query.handler';
import { GetPaginatedDiagnosisTypeQueryHandler } from './handler/get-paginated-diagnosis-type-query.handler';
import { GetOneDiagnosisTypeQueryHandler } from './handler/get-one-diagnosis-type-query.handler';
import { Provider } from '@nestjs/common';

export const DiagnosisTypeQueryHandlers:Array<Provider> = [
  GetAllDiagnosisTypeQueryHandler,
  GetPaginatedDiagnosisTypeQueryHandler,
  GetOneDiagnosisTypeQueryHandler,
];
