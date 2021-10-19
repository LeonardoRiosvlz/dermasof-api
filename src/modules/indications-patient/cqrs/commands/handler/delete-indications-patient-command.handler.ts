import { CommandHandler } from '@nestjs/cqrs';
import { DeleteIndicationsPatientCommand } from '../impl/delete-indications-patient.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@CommandHandler(DeleteIndicationsPatientCommand)
export class DeleteIndicationsPatientCommandHandler extends DeleteCommandHandler<IndicationsPatientEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IndicationsPatientEntityService.name)
  }
}
