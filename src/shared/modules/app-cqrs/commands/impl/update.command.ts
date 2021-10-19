import { AppCommand } from '../../base/AppCommand';
import { IEntity } from 'src/shared/core/interfaces/IEntity';


export class UpdateCommand<E extends IEntity> extends AppCommand {
  constructor(public request: { entityId: string, update: Partial<E>}) {
    super();
  }
}
