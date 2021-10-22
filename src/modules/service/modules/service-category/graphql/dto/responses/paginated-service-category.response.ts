import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ServiceCategoryResponse } from './service-category.response';

@ObjectType()
export class PaginatedServiceCategoryResponse extends PaginatedFindResultResponse(ServiceCategoryResponse) {
}

