import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientDataSettingsCommand } from '../impl/update-patient-data-settings.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';

@CommandHandler(UpdatePatientDataSettingsCommand)
export class UpdatePatientDataSettingsCommandHandler extends UpdateCommandHandler<PatientDataSettingsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientDataSettingsEntityService.name)
  }

}
