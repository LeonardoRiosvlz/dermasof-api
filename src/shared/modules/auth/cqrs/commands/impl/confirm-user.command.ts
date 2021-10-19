import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { ConfirmUserDto } from '../../../types/confirm-user.dto';


export class ConfirmUserCommand extends AppCommand {
  constructor(public request: ConfirmUserDto) {
    super();
  }
}
