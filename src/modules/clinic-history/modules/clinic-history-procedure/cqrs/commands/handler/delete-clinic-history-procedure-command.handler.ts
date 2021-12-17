import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClinicHistoryProcedureCommand } from '../impl/delete-clinic-history-procedure.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@CommandHandler(DeleteClinicHistoryProcedureCommand)
export class DeleteClinicHistoryProcedureCommandHandler extends DeleteCommandHandler<ClinicHistoryProcedureEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }
}
