import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyHeadquartersCommand } from '../impl/delete-many-headquarters.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@CommandHandler(DeleteManyHeadquartersCommand)
export class DeleteManyHeadquartersCommandHandler extends DeleteManyCommandHandler<HeadquartersEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, HeadquartersEntityService.name)
  }

}
