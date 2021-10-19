import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { ICreateNotification } from '../../../interfaces/IAppNotificationService';


export class SendNotificationCommand extends AppCommand {
  constructor(public request: ICreateNotification) {
    super()
  }
}
