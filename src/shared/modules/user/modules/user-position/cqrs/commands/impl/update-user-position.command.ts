import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { UserPositionEntity } from '../../../entities/user-position.entity';

export class UpdateUserPositionCommand extends UpdateCommand<UserPositionEntity> {
  constructor(public entityId: string, update: Partial<UserPositionEntity>) {
    super({entityId, update});
  }
}
