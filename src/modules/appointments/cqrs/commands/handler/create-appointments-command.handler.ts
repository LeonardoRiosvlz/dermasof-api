import { CommandHandler } from '@nestjs/cqrs';

import { CreateAppointmentsCommand } from '../impl/create-appointments.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@CommandHandler(CreateAppointmentsCommand)
export class CreateAppointmentsCommandHandler extends CreateCommandHandler<AppointmentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AppointmentsEntityService.name);
  }

}
