import { AppCommand } from '../../base/AppCommand';
import { IEntity } from '../../../../core/interfaces/IEntity';


export class CreateCommand<E extends IEntity> extends AppCommand {
  constructor(public request: E) {
    super()
  }
}
