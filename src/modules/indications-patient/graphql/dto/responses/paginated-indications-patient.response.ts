import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { IndicationsPatientResponse } from './indications-patient.response';

@ObjectType()
export class PaginatedIndicationsPatientResponse extends PaginatedFindResultResponse(IndicationsPatientResponse) {
}

