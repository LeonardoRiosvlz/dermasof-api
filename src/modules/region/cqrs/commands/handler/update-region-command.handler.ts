import { CommandHandler } from '@nestjs/cqrs';
import { UpdateRegionCommand } from '../impl/update-region.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { RegionEntityService } from '../../../services/region-entity.service';
import { RegionEntity } from '../../../entities/region.entity';

@CommandHandler(UpdateRegionCommand)
export class UpdateRegionCommandHandler extends UpdateCommandHandler<RegionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RegionEntityService.name)
  }

}
