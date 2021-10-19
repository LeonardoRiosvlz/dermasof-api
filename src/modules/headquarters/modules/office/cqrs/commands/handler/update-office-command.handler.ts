import { CommandHandler } from '@nestjs/cqrs';
import { UpdateOfficeCommand } from '../impl/update-office.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { OfficeEntityService } from '../../../services/office-entity.service';
import { OfficeEntity } from '../../../entities/office.entity';

@CommandHandler(UpdateOfficeCommand)
export class UpdateOfficeCommandHandler extends UpdateCommandHandler<OfficeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, OfficeEntityService.name)
  }

}
