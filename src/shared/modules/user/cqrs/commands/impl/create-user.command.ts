import { UserEntity } from '../../../entities/user.entity';
import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';

export class CreateUserCommand extends CreateCommand<UserEntity> {
  constructor(public request: UserEntity) {
    super(request)
  }
}
