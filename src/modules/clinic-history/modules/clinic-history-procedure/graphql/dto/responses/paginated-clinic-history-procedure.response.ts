import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClinicHistoryProcedureResponse } from './clinic-history-procedure.response';

@ObjectType()
export class PaginatedClinicHistoryProcedureResponse extends PaginatedFindResultResponse(ClinicHistoryProcedureResponse) {
}

