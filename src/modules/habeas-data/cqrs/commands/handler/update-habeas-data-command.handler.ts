import { CommandHandler } from '@nestjs/cqrs';
import { UpdateHabeasDataCommand } from '../impl/update-habeas-data.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';

@CommandHandler(UpdateHabeasDataCommand)
export class UpdateHabeasDataCommandHandler extends UpdateCommandHandler<HabeasDataEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, HabeasDataEntityService.name)
  }

}
