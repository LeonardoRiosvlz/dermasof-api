import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { LaboratoryExamsResponse } from './laboratory-exams.response';

@ObjectType()
export class PaginatedLaboratoryExamsResponse extends PaginatedFindResultResponse(LaboratoryExamsResponse) {
}

