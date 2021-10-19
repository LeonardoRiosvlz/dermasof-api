import { CommandHandler } from '@nestjs/cqrs';

import { CreateFloorCommand } from '../impl/create-floor.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@CommandHandler(CreateFloorCommand)
export class CreateFloorCommandHandler extends CreateCommandHandler<FloorEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FloorEntityService.name);
  }

}
