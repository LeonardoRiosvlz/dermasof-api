import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClinicHistoryResponse } from './clinic-history.response';

@ObjectType()
export class PaginatedClinicHistoryResponse extends PaginatedFindResultResponse(ClinicHistoryResponse) {
}

