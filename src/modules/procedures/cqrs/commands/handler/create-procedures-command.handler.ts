import { CommandHandler } from '@nestjs/cqrs';

import { CreateProceduresCommand } from '../impl/create-procedures.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@CommandHandler(CreateProceduresCommand)
export class CreateProceduresCommandHandler extends CreateCommandHandler<ProceduresEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProceduresEntityService.name);
  }

}
