import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyHabeasDataCommand } from '../impl/delete-many-habeas-data.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@CommandHandler(DeleteManyHabeasDataCommand)
export class DeleteManyHabeasDataCommandHandler extends DeleteManyCommandHandler<HabeasDataEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, HabeasDataEntityService.name)
  }

}
