import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClinicHistoryCommand } from '../impl/delete-many-clinic-history.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@CommandHandler(DeleteManyClinicHistoryCommand)
export class DeleteManyClinicHistoryCommandHandler extends DeleteManyCommandHandler<ClinicHistoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryEntityService.name)
  }

}
