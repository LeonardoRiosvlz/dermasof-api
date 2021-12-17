import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllAppointmentsQuery extends GetAllQuery<AppointmentsEntity>{
  constructor(public request: GetAllDto<AppointmentsEntity>) {
    super(request)
  }
}
