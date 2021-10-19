import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFloorCommand } from '../impl/delete-floor.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@CommandHandler(DeleteFloorCommand)
export class DeleteFloorCommandHandler extends DeleteCommandHandler<FloorEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FloorEntityService.name)
  }
}
