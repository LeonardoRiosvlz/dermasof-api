import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PatientSafetyCheckResponse } from './patient-safety-check.response';

@ObjectType()
export class PaginatedPatientSafetyCheckResponse extends PaginatedFindResultResponse(PatientSafetyCheckResponse) {
}

