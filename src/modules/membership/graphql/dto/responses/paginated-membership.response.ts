import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { MembershipResponse } from './membership.response';

@ObjectType()
export class PaginatedMembershipResponse extends PaginatedFindResultResponse(MembershipResponse) {
}

