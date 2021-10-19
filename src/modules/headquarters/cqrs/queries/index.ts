import { GetAllHeadquartersQueryHandler } from './handler/get-all-headquarters-query.handler';
import { GetPaginatedHeadquartersQueryHandler } from './handler/get-paginated-headquarters-query.handler';
import { GetOneHeadquartersQueryHandler } from './handler/get-one-headquarters-query.handler';
import { Provider } from '@nestjs/common';

export const HeadquartersQueryHandlers:Array<Provider> = [
  GetAllHeadquartersQueryHandler,
  GetPaginatedHeadquartersQueryHandler,
  GetOneHeadquartersQueryHandler,
];
