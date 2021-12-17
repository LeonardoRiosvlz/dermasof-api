import { CommandHandler } from '@nestjs/cqrs';
import { DeleteRegionCommand } from '../impl/delete-region.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@CommandHandler(DeleteRegionCommand)
export class DeleteRegionCommandHandler extends DeleteCommandHandler<RegionEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RegionEntityService.name)
  }
}
