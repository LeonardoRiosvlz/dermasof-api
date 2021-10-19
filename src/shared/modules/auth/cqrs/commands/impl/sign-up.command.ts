import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { SignUpDto } from '../../../types/sign-up.dto';


export class SignUpCommand extends AppCommand {
  constructor(public request: SignUpDto) {
    super();
  }
}
