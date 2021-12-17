import { CommandHandler } from '@nestjs/cqrs';

import { CreateClinicHistoryDiagnosisCommand } from '../impl/create-clinic-history-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@CommandHandler(CreateClinicHistoryDiagnosisCommand)
export class CreateClinicHistoryDiagnosisCommandHandler extends CreateCommandHandler<ClinicHistoryDiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryDiagnosisEntityService.name);
  }

}
