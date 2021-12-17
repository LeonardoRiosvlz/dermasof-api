import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClinicHistoryDiagnosisResponse } from './clinic-history-diagnosis.response';

@ObjectType()
export class PaginatedClinicHistoryDiagnosisResponse extends PaginatedFindResultResponse(ClinicHistoryDiagnosisResponse) {
}

