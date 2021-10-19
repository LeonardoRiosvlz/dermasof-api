import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { OfficeResponse } from './office.response';

@ObjectType()
export class PaginatedOfficeResponse extends PaginatedFindResultResponse(OfficeResponse) {
}

