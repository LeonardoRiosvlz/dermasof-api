import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClinicHistoryProcedureCommand } from '../impl/update-clinic-history-procedure.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';

@CommandHandler(UpdateClinicHistoryProcedureCommand)
export class UpdateClinicHistoryProcedureCommandHandler extends UpdateCommandHandler<ClinicHistoryProcedureEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }

}
