import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneAppointmentsQuery extends GetOneQuery<AppointmentsEntity>{
  constructor(public request: GetOneDto<AppointmentsEntity>) {
    super(request)
  }
}
