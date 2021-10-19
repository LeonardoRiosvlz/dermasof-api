import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { MedicalSpecialtiesResponse } from './medical-specialties.response';

@ObjectType()
export class PaginatedMedicalSpecialtiesResponse extends PaginatedFindResultResponse(MedicalSpecialtiesResponse) {
}

