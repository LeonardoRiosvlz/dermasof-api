import { GetAllUserPositionQueryHandler } from './handler/get-all-user-position-query.handler';
import { GetPaginatedUserPositionQueryHandler } from './handler/get-paginated-user-position-query.handler';
import { GetOneUserPositionQueryHandler } from './handler/get-one-user-position-query.handler';
import { Provider } from '@nestjs/common';

export const UserPositionQueryHandlers:Array<Provider> = [
  GetAllUserPositionQueryHandler,
  GetPaginatedUserPositionQueryHandler,
  GetOneUserPositionQueryHandler,
];
