import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DiagnosisTypeResponse } from './diagnosis-type.response';

@ObjectType()
export class PaginatedDiagnosisTypeResponse extends PaginatedFindResultResponse(DiagnosisTypeResponse) {
}

