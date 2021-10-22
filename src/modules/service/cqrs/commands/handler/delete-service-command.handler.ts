import { CommandHandler } from '@nestjs/cqrs';
import { DeleteServiceCommand } from '../impl/delete-service.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@CommandHandler(DeleteServiceCommand)
export class DeleteServiceCommandHandler extends DeleteCommandHandler<ServiceEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ServiceEntityService.name)
  }
}
