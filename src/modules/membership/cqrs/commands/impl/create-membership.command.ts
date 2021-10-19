import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { MembershipEntity } from '../../../entities/membership.entity';

export class CreateMembershipCommand extends CreateCommand<MembershipEntity> {
  constructor(public request: MembershipEntity) {
    super(request);
  }
}
