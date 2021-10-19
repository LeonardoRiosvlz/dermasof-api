import { CommandHandler } from '@nestjs/cqrs';
import { Update__name__Command } from '../impl/update-__name__(kebabCase).command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';

@CommandHandler(Update__name__Command)
export class Update__name__CommandHandler extends UpdateCommandHandler<__name__Entity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, __name__EntityService.name)
  }

}
