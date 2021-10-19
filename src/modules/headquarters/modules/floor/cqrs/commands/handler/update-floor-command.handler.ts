import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFloorCommand } from '../impl/update-floor.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FloorEntityService } from '../../../services/floor-entity.service';
import { FloorEntity } from '../../../entities/floor.entity';

@CommandHandler(UpdateFloorCommand)
export class UpdateFloorCommandHandler extends UpdateCommandHandler<FloorEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FloorEntityService.name)
  }

}
