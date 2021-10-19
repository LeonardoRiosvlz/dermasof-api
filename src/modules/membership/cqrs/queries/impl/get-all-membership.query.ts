import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { MembershipEntity } from '../../../entities/membership.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllMembershipQuery extends GetAllQuery<MembershipEntity>{
  constructor(public request: GetAllDto<MembershipEntity>) {
    super(request)
  }
}
