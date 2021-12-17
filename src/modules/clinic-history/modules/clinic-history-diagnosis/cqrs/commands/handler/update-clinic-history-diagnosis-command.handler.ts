import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClinicHistoryDiagnosisCommand } from '../impl/update-clinic-history-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';

@CommandHandler(UpdateClinicHistoryDiagnosisCommand)
export class UpdateClinicHistoryDiagnosisCommandHandler extends UpdateCommandHandler<ClinicHistoryDiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }

}
