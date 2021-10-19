import { CommandHandler } from '@nestjs/cqrs';
import { DeletePatientSafetyCheckCommand } from '../impl/delete-patient-safety-check.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@CommandHandler(DeletePatientSafetyCheckCommand)
export class DeletePatientSafetyCheckCommandHandler extends DeleteCommandHandler<PatientSafetyCheckEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientSafetyCheckEntityService.name)
  }
}
