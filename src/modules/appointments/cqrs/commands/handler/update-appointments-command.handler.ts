import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAppointmentsCommand } from '../impl/update-appointments.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';
import { AppointmentsEntity } from '../../../entities/appointments.entity';

@CommandHandler(UpdateAppointmentsCommand)
export class UpdateAppointmentsCommandHandler extends UpdateCommandHandler<AppointmentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AppointmentsEntityService.name)
  }

}
