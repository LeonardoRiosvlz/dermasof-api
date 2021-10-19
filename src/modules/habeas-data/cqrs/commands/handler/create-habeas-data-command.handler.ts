import { CommandHandler } from '@nestjs/cqrs';

import { CreateHabeasDataCommand } from '../impl/create-habeas-data.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@CommandHandler(CreateHabeasDataCommand)
export class CreateHabeasDataCommandHandler extends CreateCommandHandler<HabeasDataEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, HabeasDataEntityService.name);
  }

}
