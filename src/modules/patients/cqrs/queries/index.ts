import { GetAllPatientsQueryHandler } from './handler/get-all-patients-query.handler';
import { GetPaginatedPatientsQueryHandler } from './handler/get-paginated-patients-query.handler';
import { GetOnePatientsQueryHandler } from './handler/get-one-patients-query.handler';
import { Provider } from '@nestjs/common';

export const PatientsQueryHandlers:Array<Provider> = [
  GetAllPatientsQueryHandler,
  GetPaginatedPatientsQueryHandler,
  GetOnePatientsQueryHandler,
];
