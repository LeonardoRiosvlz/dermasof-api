import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClinicHistoryProcedureCommand } from '../impl/delete-many-clinic-history-procedure.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@CommandHandler(DeleteManyClinicHistoryProcedureCommand)
export class DeleteManyClinicHistoryProcedureCommandHandler extends DeleteManyCommandHandler<ClinicHistoryProcedureEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }

}
