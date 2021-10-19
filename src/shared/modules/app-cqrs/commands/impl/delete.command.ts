import { AppCommand } from '../../base/AppCommand';

export class DeleteCommand extends AppCommand {
  constructor(public entityId: string) {
    super()
  }
}
