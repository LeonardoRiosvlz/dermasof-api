import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { IMailData } from '../../../interfaces/IMailData';


export class SendEmailCommand extends AppCommand {
  constructor(public request: { to: string, data: IMailData }) {
    super()
  }
}
