import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ProductCategoryResponse } from './product-category.response';

@ObjectType()
export class PaginatedProductCategoryResponse extends PaginatedFindResultResponse(ProductCategoryResponse) {
}

