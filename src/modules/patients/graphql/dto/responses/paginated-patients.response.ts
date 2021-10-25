import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PatientsResponse } from './patients.response';

@ObjectType()
export class PaginatedPatientsResponse extends PaginatedFindResultResponse(PatientsResponse) {
}

