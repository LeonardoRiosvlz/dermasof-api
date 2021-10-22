import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ServiceResponse } from './service.response';

@ObjectType()
export class PaginatedServiceResponse extends PaginatedFindResultResponse(ServiceResponse) {
}

