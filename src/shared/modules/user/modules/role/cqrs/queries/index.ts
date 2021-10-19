import { GetAllRoleQueryHandler } from './handler/get-all-role-query.handler';
import { GetPaginatedRoleQueryHandler } from './handler/get-paginated-role-query.handler';
import { GetOneRoleQueryHandler } from './handler/get-one-role-query.handler';
import { Provider } from '@nestjs/common';

export const RoleQueryHandlers:Array<Provider> = [
  GetAllRoleQueryHandler,
  GetPaginatedRoleQueryHandler,
  GetOneRoleQueryHandler,
];
