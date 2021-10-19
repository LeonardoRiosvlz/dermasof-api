import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyProceduresCommand } from '../impl/delete-many-procedures.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@CommandHandler(DeleteManyProceduresCommand)
export class DeleteManyProceduresCommandHandler extends DeleteManyCommandHandler<ProceduresEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProceduresEntityService.name)
  }

}
