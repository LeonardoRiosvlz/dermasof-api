import { CommandHandler } from '@nestjs/cqrs';

import { CreatePatientDataSettingsCommand } from '../impl/create-patient-data-settings.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@CommandHandler(CreatePatientDataSettingsCommand)
export class CreatePatientDataSettingsCommandHandler extends CreateCommandHandler<PatientDataSettingsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientDataSettingsEntityService.name);
  }

}
