import { AppCommand } from '../../../../app-cqrs/base/AppCommand';


export interface IChangePasswordParams  {
  userId: string;
  oldPassword: string;
  newPassword: string;
}

export class ChangePasswordCommand extends AppCommand {
  constructor(public request: IChangePasswordParams) {
    super();
  }
}
