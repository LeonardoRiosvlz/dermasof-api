import { CommandHandler } from '@nestjs/cqrs';

import { CreatePathologiesCommand } from '../impl/create-pathologies.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@CommandHandler(CreatePathologiesCommand)
export class CreatePathologiesCommandHandler extends CreateCommandHandler<PathologiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PathologiesEntityService.name);
  }

}
