import { CreateUserCommandHandler } from './handler/create-user-command.handler';
import { DeleteUserCommandHandler } from './handler/delete-user-command.handler';
import { UpdateUserCommandHandler } from './handler/update-user-command.handler';
import { ChangePasswordCommandHandler } from './handler/change-password-command.handler';
import { ResetPasswordCommandHandler } from './handler/reset-password-command.handler';
import { DeleteManyUserCommandHandler } from './handler/delete-many-user-command.handler';


export const UserCommandHandlers = [
  CreateUserCommandHandler,
  DeleteUserCommandHandler,
  UpdateUserCommandHandler,
  ChangePasswordCommandHandler,
  ResetPasswordCommandHandler,
  DeleteManyUserCommandHandler
];
