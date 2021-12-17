import { GetAllClinicalHistoryIndicationsQueryHandler } from './handler/get-all-clinical-history-indications-query.handler';
import { GetPaginatedClinicalHistoryIndicationsQueryHandler } from './handler/get-paginated-clinical-history-indications-query.handler';
import { GetOneClinicalHistoryIndicationsQueryHandler } from './handler/get-one-clinical-history-indications-query.handler';
import { Provider } from '@nestjs/common';

export const ClinicalHistoryIndicationsQueryHandlers:Array<Provider> = [
  GetAllClinicalHistoryIndicationsQueryHandler,
  GetPaginatedClinicalHistoryIndicationsQueryHandler,
  GetOneClinicalHistoryIndicationsQueryHandler,
];
