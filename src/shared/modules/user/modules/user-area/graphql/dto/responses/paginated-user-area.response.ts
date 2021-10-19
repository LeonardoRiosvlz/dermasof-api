import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { UserAreaResponse } from './user-area.response';

@ObjectType()
export class PaginatedUserAreaResponse extends PaginatedFindResultResponse(UserAreaResponse) {
}

