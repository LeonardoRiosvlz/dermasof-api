import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFloorCommand } from '../impl/delete-many-floor.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@CommandHandler(DeleteManyFloorCommand)
export class DeleteManyFloorCommandHandler extends DeleteManyCommandHandler<FloorEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FloorEntityService.name)
  }

}
