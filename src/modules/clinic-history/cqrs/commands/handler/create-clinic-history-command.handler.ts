import { CommandHandler } from '@nestjs/cqrs';

import { CreateClinicHistoryCommand } from '../impl/create-clinic-history.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@CommandHandler(CreateClinicHistoryCommand)
export class CreateClinicHistoryCommandHandler extends CreateCommandHandler<ClinicHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryEntityService.name);
  }

}
