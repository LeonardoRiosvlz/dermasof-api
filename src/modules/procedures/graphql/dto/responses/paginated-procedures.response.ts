import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ProceduresResponse } from './procedures.response';

@ObjectType()
export class PaginatedProceduresResponse extends PaginatedFindResultResponse(ProceduresResponse) {
}

