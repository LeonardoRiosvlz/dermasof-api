import { CommandHandler } from '@nestjs/cqrs';

import { Create__name__Command } from '../impl/create-__name__(kebabCase).command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@CommandHandler(Create__name__Command)
export class Create__name__CommandHandler extends CreateCommandHandler<__name__Entity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, __name__EntityService.name);
  }

}
