import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClinicHistoryCommand } from '../impl/delete-clinic-history.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@CommandHandler(DeleteClinicHistoryCommand)
export class DeleteClinicHistoryCommandHandler extends DeleteCommandHandler<ClinicHistoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClinicHistoryEntityService.name)
  }
}
