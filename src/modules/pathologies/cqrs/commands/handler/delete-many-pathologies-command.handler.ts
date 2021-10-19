import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPathologiesCommand } from '../impl/delete-many-pathologies.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@CommandHandler(DeleteManyPathologiesCommand)
export class DeleteManyPathologiesCommandHandler extends DeleteManyCommandHandler<PathologiesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PathologiesEntityService.name)
  }

}
