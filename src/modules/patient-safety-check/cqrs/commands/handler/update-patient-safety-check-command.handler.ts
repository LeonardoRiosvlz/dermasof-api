import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientSafetyCheckCommand } from '../impl/update-patient-safety-check.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';

@CommandHandler(UpdatePatientSafetyCheckCommand)
export class UpdatePatientSafetyCheckCommandHandler extends UpdateCommandHandler<PatientSafetyCheckEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientSafetyCheckEntityService.name)
  }

}
