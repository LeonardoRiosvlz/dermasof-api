import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { ForgotPasswordDto } from '../../../types/forgot-password.dto';


export class ForgotPasswordCommand extends AppCommand{
  constructor(public request: ForgotPasswordDto) {
    super()
  }
}
