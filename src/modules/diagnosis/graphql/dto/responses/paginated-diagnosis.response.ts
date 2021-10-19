import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DiagnosisResponse } from './diagnosis.response';

@ObjectType()
export class PaginatedDiagnosisResponse extends PaginatedFindResultResponse(DiagnosisResponse) {
}

