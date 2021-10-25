import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { VitalSignsResponse } from './vital-signs.response';

@ObjectType()
export class PaginatedVitalSignsResponse extends PaginatedFindResultResponse(VitalSignsResponse) {
}

