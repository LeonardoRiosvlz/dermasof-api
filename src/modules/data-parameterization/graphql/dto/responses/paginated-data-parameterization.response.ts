import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DataParameterizationResponse } from './data-parameterization.response';

@ObjectType()
export class PaginatedDataParameterizationResponse extends PaginatedFindResultResponse(DataParameterizationResponse) {
}

