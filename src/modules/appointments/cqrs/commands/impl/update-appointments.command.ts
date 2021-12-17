import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { AppointmentsEntity } from '../../../entities/appointments.entity';

export class UpdateAppointmentsCommand extends UpdateCommand<AppointmentsEntity> {
  constructor(public entityId: string, update: Partial<AppointmentsEntity>) {
    super({entityId, update});
  }
}
