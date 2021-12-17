import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClinicHistoryDiagnosisCommand } from '../impl/delete-many-clinic-history-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@CommandHandler(DeleteManyClinicHistoryDiagnosisCommand)
export class DeleteManyClinicHistoryDiagnosisCommandHandler extends DeleteManyCommandHandler<ClinicHistoryDiagnosisEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }

}
