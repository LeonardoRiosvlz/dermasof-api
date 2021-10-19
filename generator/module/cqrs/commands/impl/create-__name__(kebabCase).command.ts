import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';

export class Create__name__Command extends CreateCommand<__name__Entity> {
  constructor(public request: __name__Entity) {
    super(request);
  }
}
