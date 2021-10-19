import { GetAllUsersQueryHandler } from './handler/get-all-users-query.handler';
import { GetOneUserQueryHandler } from './handler/get-one-user-query.handler';
import { GetPaginatedUsersQueryHandler } from './handler/get-paginated-users-query.handler';

export const UserQueryHandlers = [
  GetAllUsersQueryHandler,
  GetOneUserQueryHandler,
  GetPaginatedUsersQueryHandler,
];
