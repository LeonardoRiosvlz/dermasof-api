import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { AppointmentsResponse } from './appointments.response';

@ObjectType()
export class PaginatedAppointmentsResponse extends PaginatedFindResultResponse(AppointmentsResponse) {
}

