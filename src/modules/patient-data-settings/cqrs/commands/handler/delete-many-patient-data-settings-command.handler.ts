import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPatientDataSettingsCommand } from '../impl/delete-many-patient-data-settings.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@CommandHandler(DeleteManyPatientDataSettingsCommand)
export class DeleteManyPatientDataSettingsCommandHandler extends DeleteManyCommandHandler<PatientDataSettingsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientDataSettingsEntityService.name)
  }

}
