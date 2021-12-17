import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyAppointmentsCommand } from '../impl/delete-many-appointments.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@CommandHandler(DeleteManyAppointmentsCommand)
export class DeleteManyAppointmentsCommandHandler extends DeleteManyCommandHandler<AppointmentsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AppointmentsEntityService.name)
  }

}
