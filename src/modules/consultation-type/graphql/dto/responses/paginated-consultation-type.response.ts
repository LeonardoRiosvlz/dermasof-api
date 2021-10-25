import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ConsultationTypeResponse } from './consultation-type.response';

@ObjectType()
export class PaginatedConsultationTypeResponse extends PaginatedFindResultResponse(ConsultationTypeResponse) {
}

