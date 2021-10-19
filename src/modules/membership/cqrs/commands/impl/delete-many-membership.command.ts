import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { MembershipEntity } from '../../../entities/membership.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyMembershipCommand extends DeleteManyCommand<MembershipEntity>{
  constructor(public request: GetOneDto<MembershipEntity>) {
    super(request)
  }
}
