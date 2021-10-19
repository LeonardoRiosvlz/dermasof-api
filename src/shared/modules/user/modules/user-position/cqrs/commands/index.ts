import { CreateUserPositionCommandHandler } from './handler/create-user-position-command.handler';
import { DeleteUserPositionCommandHandler } from './handler/delete-user-position-command.handler';
import { UpdateUserPositionCommandHandler } from './handler/update-user-position-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyUserPositionCommandHandler } from './handler/delete-many-user-position-command.handler';

export const UserPositionCommandHandlers: Array<Provider> = [
  CreateUserPositionCommandHandler,
  DeleteUserPositionCommandHandler,
  UpdateUserPositionCommandHandler,
  DeleteManyUserPositionCommandHandler
];
