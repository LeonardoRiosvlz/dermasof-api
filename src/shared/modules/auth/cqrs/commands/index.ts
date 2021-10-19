import { SignUpCommandHandler } from './handler/sign-up.command.handler';
import { SignInCommandHandler } from './handler/sign-in.command.handler';
import { ConfirmUserCommandHandler } from './handler/confirm-user.command.handler';
import { ForgotPasswordCommandHandler } from './handler/forgot-password.command.handler';


export const AuthCommandsHandlers = [
  SignUpCommandHandler,
  SignInCommandHandler,
  ConfirmUserCommandHandler,
  ForgotPasswordCommandHandler
]
