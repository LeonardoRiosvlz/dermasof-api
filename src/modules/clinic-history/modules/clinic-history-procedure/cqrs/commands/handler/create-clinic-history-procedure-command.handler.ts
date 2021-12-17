import { CommandHandler } from '@nestjs/cqrs';

import { CreateClinicHistoryProcedureCommand } from '../impl/create-clinic-history-procedure.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@CommandHandler(CreateClinicHistoryProcedureCommand)
export class CreateClinicHistoryProcedureCommandHandler extends CreateCommandHandler<ClinicHistoryProcedureEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryProcedureEntityService.name);
  }

}
