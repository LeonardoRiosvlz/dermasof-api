import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ProductResponse } from './product.response';

@ObjectType()
export class PaginatedProductResponse extends PaginatedFindResultResponse(ProductResponse) {
}

