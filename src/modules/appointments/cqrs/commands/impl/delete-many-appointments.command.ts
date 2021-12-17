import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyAppointmentsCommand extends DeleteManyCommand<AppointmentsEntity>{
  constructor(public request: GetOneDto<AppointmentsEntity>) {
    super(request)
  }
}
