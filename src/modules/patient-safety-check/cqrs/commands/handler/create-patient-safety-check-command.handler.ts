import { CommandHandler } from '@nestjs/cqrs';

import { CreatePatientSafetyCheckCommand } from '../impl/create-patient-safety-check.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@CommandHandler(CreatePatientSafetyCheckCommand)
export class CreatePatientSafetyCheckCommandHandler extends CreateCommandHandler<PatientSafetyCheckEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientSafetyCheckEntityService.name);
  }

}
