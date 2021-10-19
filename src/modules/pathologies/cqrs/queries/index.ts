import { GetAllPathologiesQueryHandler } from './handler/get-all-pathologies-query.handler';
import { GetPaginatedPathologiesQueryHandler } from './handler/get-paginated-pathologies-query.handler';
import { GetOnePathologiesQueryHandler } from './handler/get-one-pathologies-query.handler';
import { Provider } from '@nestjs/common';

export const PathologiesQueryHandlers:Array<Provider> = [
  GetAllPathologiesQueryHandler,
  GetPaginatedPathologiesQueryHandler,
  GetOnePathologiesQueryHandler,
];
