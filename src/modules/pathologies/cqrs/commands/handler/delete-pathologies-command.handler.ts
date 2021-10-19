import { CommandHandler } from '@nestjs/cqrs';
import { DeletePathologiesCommand } from '../impl/delete-pathologies.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@CommandHandler(DeletePathologiesCommand)
export class DeletePathologiesCommandHandler extends DeleteCommandHandler<PathologiesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PathologiesEntityService.name)
  }
}
