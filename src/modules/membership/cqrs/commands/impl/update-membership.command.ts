import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { MembershipEntity } from '../../../entities/membership.entity';

export class UpdateMembershipCommand extends UpdateCommand<MembershipEntity> {
  constructor(public entityId: string, update: Partial<MembershipEntity>) {
    super({entityId, update});
  }
}
