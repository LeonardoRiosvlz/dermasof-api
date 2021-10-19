import { GetAllDataParameterizationQueryHandler } from './handler/get-all-data-parameterization-query.handler';
import { GetPaginatedDataParameterizationQueryHandler } from './handler/get-paginated-data-parameterization-query.handler';
import { GetOneDataParameterizationQueryHandler } from './handler/get-one-data-parameterization-query.handler';
import { Provider } from '@nestjs/common';

export const DataParameterizationQueryHandlers:Array<Provider> = [
  GetAllDataParameterizationQueryHandler,
  GetPaginatedDataParameterizationQueryHandler,
  GetOneDataParameterizationQueryHandler,
];
