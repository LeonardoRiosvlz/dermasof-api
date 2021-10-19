import { CommandHandler } from '@nestjs/cqrs';
import { DeletePatientDataSettingsCommand } from '../impl/delete-patient-data-settings.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@CommandHandler(DeletePatientDataSettingsCommand)
export class DeletePatientDataSettingsCommandHandler extends DeleteCommandHandler<PatientDataSettingsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientDataSettingsEntityService.name)
  }
}
