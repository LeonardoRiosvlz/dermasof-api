import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { MembershipEntity } from '../../../entities/membership.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedMembershipQuery extends GetPaginatedQuery<MembershipEntity>{
  constructor(public request: GetPaginatedDto<MembershipEntity>) {
    super(request)
  }
}
