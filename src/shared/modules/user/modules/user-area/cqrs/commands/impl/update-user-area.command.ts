import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { UserAreaEntity } from '../../../entities/user-area.entity';

export class UpdateUserAreaCommand extends UpdateCommand<UserAreaEntity> {
  constructor(public entityId: string, update: Partial<UserAreaEntity>) {
    super({entityId, update});
  }
}
