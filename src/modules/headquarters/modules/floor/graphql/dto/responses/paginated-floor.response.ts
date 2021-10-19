import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FloorResponse } from './floor.response';

@ObjectType()
export class PaginatedFloorResponse extends PaginatedFindResultResponse(FloorResponse) {
}

