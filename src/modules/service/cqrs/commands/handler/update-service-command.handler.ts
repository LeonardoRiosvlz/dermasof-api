import { CommandHandler } from '@nestjs/cqrs';
import { UpdateServiceCommand } from '../impl/update-service.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ServiceEntityService } from '../../../services/service-entity.service';
import { ServiceEntity } from '../../../entities/service.entity';

@CommandHandler(UpdateServiceCommand)
export class UpdateServiceCommandHandler extends UpdateCommandHandler<ServiceEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ServiceEntityService.name)
  }

}
