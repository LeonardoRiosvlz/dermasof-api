import { CommandHandler } from '@nestjs/cqrs';
import { DeleteHabeasDataCommand } from '../impl/delete-habeas-data.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@CommandHandler(DeleteHabeasDataCommand)
export class DeleteHabeasDataCommandHandler extends DeleteCommandHandler<HabeasDataEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, HabeasDataEntityService.name)
  }
}
