import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { RoleResponse } from './role.response';

@ObjectType()
export class PaginatedRoleResponse extends PaginatedFindResultResponse(RoleResponse) {
}

