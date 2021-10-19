import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { HeadquartersResponse } from './headquarters.response';

@ObjectType()
export class PaginatedHeadquartersResponse extends PaginatedFindResultResponse(HeadquartersResponse) {
}

