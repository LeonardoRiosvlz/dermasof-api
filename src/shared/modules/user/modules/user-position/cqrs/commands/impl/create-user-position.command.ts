import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { UserPositionEntity } from '../../../entities/user-position.entity';

export class CreateUserPositionCommand extends CreateCommand<UserPositionEntity> {
  constructor(public request: UserPositionEntity) {
    super(request);
  }
}
