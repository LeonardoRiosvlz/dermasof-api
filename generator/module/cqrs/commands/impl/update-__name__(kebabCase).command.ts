import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';

export class Update__name__Command extends UpdateCommand<__name__Entity> {
  constructor(public entityId: string, update: Partial<__name__Entity>) {
    super({entityId, update});
  }
}
