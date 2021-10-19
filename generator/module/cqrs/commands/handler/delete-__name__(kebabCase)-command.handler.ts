import { CommandHandler } from '@nestjs/cqrs';
import { Delete__name__Command } from '../impl/delete-__name__(kebabCase).command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@CommandHandler(Delete__name__Command)
export class Delete__name__CommandHandler extends DeleteCommandHandler<__name__Entity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, __name__EntityService.name)
  }
}
