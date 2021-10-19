import { UserEntity } from '../../../entities/user.entity';
import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProfileEntity } from '../../../entities/schemas/profile.schema';

type PartialUser = Partial<Omit<UserEntity, 'profile'>> & {
  profile?: Partial<ProfileEntity>
}

export class UpdateUserCommand extends UpdateCommand<UserEntity> {
  constructor(public request: { entityId: string, update: PartialUser }) {
    super({entityId: request.entityId ,update: request.update});
  }
}
