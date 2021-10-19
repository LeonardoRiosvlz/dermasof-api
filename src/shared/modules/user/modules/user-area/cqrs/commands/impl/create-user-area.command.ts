import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { UserAreaEntity } from '../../../entities/user-area.entity';

export class CreateUserAreaCommand extends CreateCommand<UserAreaEntity> {
  constructor(public request: UserAreaEntity) {
    super(request);
  }
}
