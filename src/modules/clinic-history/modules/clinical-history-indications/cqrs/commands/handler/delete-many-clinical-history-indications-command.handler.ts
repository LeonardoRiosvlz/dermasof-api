import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClinicalHistoryIndicationsCommand } from '../impl/delete-many-clinical-history-indications.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@CommandHandler(DeleteManyClinicalHistoryIndicationsCommand)
export class DeleteManyClinicalHistoryIndicationsCommandHandler extends DeleteManyCommandHandler<ClinicalHistoryIndicationsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }

}
