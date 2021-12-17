import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClinicalHistoryIndicationsCommand } from '../impl/delete-clinical-history-indications.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@CommandHandler(DeleteClinicalHistoryIndicationsCommand)
export class DeleteClinicalHistoryIndicationsCommandHandler extends DeleteCommandHandler<ClinicalHistoryIndicationsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }
}
