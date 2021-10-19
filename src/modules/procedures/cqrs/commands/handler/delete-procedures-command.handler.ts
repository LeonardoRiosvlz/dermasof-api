import { CommandHandler } from '@nestjs/cqrs';
import { DeleteProceduresCommand } from '../impl/delete-procedures.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@CommandHandler(DeleteProceduresCommand)
export class DeleteProceduresCommandHandler extends DeleteCommandHandler<ProceduresEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProceduresEntityService.name)
  }
}
