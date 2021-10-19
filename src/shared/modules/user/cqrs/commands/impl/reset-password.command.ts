import { AppCommand } from '../../../../app-cqrs/base/AppCommand';


export interface IResetPasswordParams {
  userId: string;
  password: string;
}
export class ResetPasswordCommand extends AppCommand {
  constructor(public request: IResetPasswordParams) {
    super();
  }
}
