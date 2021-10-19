import { CreateUserAreaCommandHandler } from './handler/create-user-area-command.handler';
import { DeleteUserAreaCommandHandler } from './handler/delete-user-area-command.handler';
import { UpdateUserAreaCommandHandler } from './handler/update-user-area-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyUserAreaCommandHandler } from './handler/delete-many-user-area-command.handler';

export const UserAreaCommandHandlers: Array<Provider> = [
  CreateUserAreaCommandHandler,
  DeleteUserAreaCommandHandler,
  UpdateUserAreaCommandHandler,
  DeleteManyUserAreaCommandHandler
];
