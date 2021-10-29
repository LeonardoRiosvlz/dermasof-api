import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClinicHistoryCommand } from '../impl/update-clinic-history.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';

@CommandHandler(UpdateClinicHistoryCommand)
export class UpdateClinicHistoryCommandHandler extends UpdateCommandHandler<ClinicHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClinicHistoryEntityService.name)
  }

}
