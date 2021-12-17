import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ClinicalHistoryIndicationsResponse } from './clinical-history-indications.response';

@ObjectType()
export class PaginatedClinicalHistoryIndicationsResponse extends PaginatedFindResultResponse(ClinicalHistoryIndicationsResponse) {
}

