import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PathologiesResponse } from './pathologies.response';

@ObjectType()
export class PaginatedPathologiesResponse extends PaginatedFindResultResponse(PathologiesResponse) {
}

