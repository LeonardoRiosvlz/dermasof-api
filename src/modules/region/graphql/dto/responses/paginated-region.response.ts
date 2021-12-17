import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { RegionResponse } from './region.response';

@ObjectType()
export class PaginatedRegionResponse extends PaginatedFindResultResponse(RegionResponse) {
}

