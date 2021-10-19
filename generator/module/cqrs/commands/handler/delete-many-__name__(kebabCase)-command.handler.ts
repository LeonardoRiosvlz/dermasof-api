import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteMany__name__Command } from '../impl/delete-many-__name__(kebabCase).command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@CommandHandler(DeleteMany__name__Command)
export class DeleteMany__name__CommandHandler extends DeleteManyCommandHandler<__name__Entity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, __name__EntityService.name)
  }

}
