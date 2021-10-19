import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPatientSafetyCheckCommand } from '../impl/delete-many-patient-safety-check.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@CommandHandler(DeleteManyPatientSafetyCheckCommand)
export class DeleteManyPatientSafetyCheckCommandHandler extends DeleteManyCommandHandler<PatientSafetyCheckEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientSafetyCheckEntityService.name)
  }

}
