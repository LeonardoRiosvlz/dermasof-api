import { CommandHandler } from '@nestjs/cqrs';
import { UpdateProceduresCommand } from '../impl/update-procedures.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';
import { ProceduresEntity } from '../../../entities/procedures.entity';

@CommandHandler(UpdateProceduresCommand)
export class UpdateProceduresCommandHandler extends UpdateCommandHandler<ProceduresEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProceduresEntityService.name)
  }

}
