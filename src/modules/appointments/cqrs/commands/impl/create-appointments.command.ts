import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { AppointmentsEntity } from '../../../entities/appointments.entity';

export class CreateAppointmentsCommand extends CreateCommand<AppointmentsEntity> {
  constructor(public request: AppointmentsEntity) {
    super(request);
  }
}
