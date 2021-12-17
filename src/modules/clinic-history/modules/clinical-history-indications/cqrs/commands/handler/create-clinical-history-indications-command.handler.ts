import { CommandHandler } from '@nestjs/cqrs';

import { CreateClinicalHistoryIndicationsCommand } from '../impl/create-clinical-history-indications.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@CommandHandler(CreateClinicalHistoryIndicationsCommand)
export class CreateClinicalHistoryIndicationsCommandHandler extends CreateCommandHandler<ClinicalHistoryIndicationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicalHistoryIndicationsEntityService.name);
  }

}
