import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyUserAreaCommand } from '../impl/delete-many-user-area.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@CommandHandler(DeleteManyUserAreaCommand)
export class DeleteManyUserAreaCommandHandler extends DeleteManyCommandHandler<UserAreaEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, UserAreaEntityService.name)
  }

}
