import { CommandHandler } from '@nestjs/cqrs';
import { DeleteAppointmentsCommand } from '../impl/delete-appointments.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@CommandHandler(DeleteAppointmentsCommand)
export class DeleteAppointmentsCommandHandler extends DeleteCommandHandler<AppointmentsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AppointmentsEntityService.name)
  }
}
