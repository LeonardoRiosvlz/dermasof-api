import { CreateRoleCommandHandler } from './handler/create-role-command.handler';
import { DeleteRoleCommandHandler } from './handler/delete-role-command.handler';
import { UpdateRoleCommandHandler } from './handler/update-role-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyRoleCommandHandler } from './handler/delete-many-role-command.handler';

export const RoleCommandHandlers: Array<Provider> = [
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
  DeleteManyRoleCommandHandler
];
