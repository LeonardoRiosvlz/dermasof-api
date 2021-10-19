import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyUserPositionCommand } from '../impl/delete-many-user-position.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@CommandHandler(DeleteManyUserPositionCommand)
export class DeleteManyUserPositionCommandHandler extends DeleteManyCommandHandler<UserPositionEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, UserPositionService.name)
  }

}
