import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { SignInDto } from '../../../types/sign-in.dto';


export class SignInCommand extends AppCommand {
  constructor(public request: SignInDto) {
    super();
  }
}
