import { CommandHandler } from '@nestjs/cqrs';

import { CreateOfficeCommand } from '../impl/create-office.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@CommandHandler(CreateOfficeCommand)
export class CreateOfficeCommandHandler extends CreateCommandHandler<OfficeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, OfficeEntityService.name);
  }

}
