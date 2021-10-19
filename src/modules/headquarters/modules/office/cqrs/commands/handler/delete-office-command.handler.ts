import { CommandHandler } from '@nestjs/cqrs';
import { DeleteOfficeCommand } from '../impl/delete-office.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@CommandHandler(DeleteOfficeCommand)
export class DeleteOfficeCommandHandler extends DeleteCommandHandler<OfficeEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, OfficeEntityService.name)
  }
}
