import { CommandHandler } from '@nestjs/cqrs';
import { DeleteVitalSignsCommand } from '../impl/delete-vital-signs.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@CommandHandler(DeleteVitalSignsCommand)
export class DeleteVitalSignsCommandHandler extends DeleteCommandHandler<VitalSignsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, VitalSignsEntityService.name)
  }
}
