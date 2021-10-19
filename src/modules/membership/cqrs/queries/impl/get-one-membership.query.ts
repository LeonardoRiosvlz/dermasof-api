import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { MembershipEntity } from '../../../entities/membership.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneMembershipQuery extends GetOneQuery<MembershipEntity>{
  constructor(public request: GetOneDto<MembershipEntity>) {
    super(request)
  }
}
