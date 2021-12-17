import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClinicHistoryDiagnosisCommand } from '../impl/delete-clinic-history-diagnosis.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@CommandHandler(DeleteClinicHistoryDiagnosisCommand)
export class DeleteClinicHistoryDiagnosisCommandHandler extends DeleteCommandHandler<ClinicHistoryDiagnosisEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }
}
