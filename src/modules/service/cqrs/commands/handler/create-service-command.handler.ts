import { CommandHandler } from '@nestjs/cqrs';

import { CreateServiceCommand } from '../impl/create-service.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@CommandHandler(CreateServiceCommand)
export class CreateServiceCommandHandler extends CreateCommandHandler<ServiceEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ServiceEntityService.name);
  }

}
