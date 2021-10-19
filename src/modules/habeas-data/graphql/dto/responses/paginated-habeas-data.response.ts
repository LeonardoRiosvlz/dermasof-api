import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { HabeasDataResponse } from './habeas-data.response';

@ObjectType()
export class PaginatedHabeasDataResponse extends PaginatedFindResultResponse(HabeasDataResponse) {
}

