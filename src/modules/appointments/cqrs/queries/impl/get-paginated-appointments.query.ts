import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedAppointmentsQuery extends GetPaginatedQuery<AppointmentsEntity>{
  constructor(public request: GetPaginatedDto<AppointmentsEntity>) {
    super(request)
  }
}
