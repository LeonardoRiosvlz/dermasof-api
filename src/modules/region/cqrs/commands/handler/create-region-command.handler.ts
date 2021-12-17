import { CommandHandler } from '@nestjs/cqrs';

import { CreateRegionCommand } from '../impl/create-region.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@CommandHandler(CreateRegionCommand)
export class CreateRegionCommandHandler extends CreateCommandHandler<RegionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RegionEntityService.name);
  }

}
