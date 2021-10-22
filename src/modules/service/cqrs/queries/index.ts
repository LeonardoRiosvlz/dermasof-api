import { GetAllServiceQueryHandler } from './handler/get-all-service-query.handler';
import { GetPaginatedServiceQueryHandler } from './handler/get-paginated-service-query.handler';
import { GetOneServiceQueryHandler } from './handler/get-one-service-query.handler';
import { Provider } from '@nestjs/common';

export const ServiceQueryHandlers:Array<Provider> = [
  GetAllServiceQueryHandler,
  GetPaginatedServiceQueryHandler,
  GetOneServiceQueryHandler,
];
