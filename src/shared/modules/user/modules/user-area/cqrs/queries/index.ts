import { GetAllUserAreaQueryHandler } from './handler/get-all-user-area-query.handler';
import { GetPaginatedUserAreaQueryHandler } from './handler/get-paginated-user-area-query.handler';
import { GetOneUserAreaQueryHandler } from './handler/get-one-user-area-query.handler';
import { Provider } from '@nestjs/common';

export const UserAreaQueryHandlers:Array<Provider> = [
  GetAllUserAreaQueryHandler,
  GetPaginatedUserAreaQueryHandler,
  GetOneUserAreaQueryHandler,
];
