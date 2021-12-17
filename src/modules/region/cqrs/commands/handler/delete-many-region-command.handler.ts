import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyRegionCommand } from '../impl/delete-many-region.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@CommandHandler(DeleteManyRegionCommand)
export class DeleteManyRegionCommandHandler extends DeleteManyCommandHandler<RegionEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RegionEntityService.name)
  }

}
