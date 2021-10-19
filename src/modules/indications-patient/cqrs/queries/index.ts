import { GetAllIndicationsPatientQueryHandler } from './handler/get-all-indications-patient-query.handler';
import { GetPaginatedIndicationsPatientQueryHandler } from './handler/get-paginated-indications-patient-query.handler';
import { GetOneIndicationsPatientQueryHandler } from './handler/get-one-indications-patient-query.handler';
import { Provider } from '@nestjs/common';

export const IndicationsPatientQueryHandlers:Array<Provider> = [
  GetAllIndicationsPatientQueryHandler,
  GetPaginatedIndicationsPatientQueryHandler,
  GetOneIndicationsPatientQueryHandler,
];
