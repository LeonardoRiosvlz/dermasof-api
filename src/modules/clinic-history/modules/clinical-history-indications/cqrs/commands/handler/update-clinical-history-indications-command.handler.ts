import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClinicalHistoryIndicationsCommand } from '../impl/update-clinical-history-indications.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';

@CommandHandler(UpdateClinicalHistoryIndicationsCommand)
export class UpdateClinicalHistoryIndicationsCommandHandler extends UpdateCommandHandler<ClinicalHistoryIndicationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }

}
