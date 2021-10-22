import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyServiceCommand } from '../impl/delete-many-service.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@CommandHandler(DeleteManyServiceCommand)
export class DeleteManyServiceCommandHandler extends DeleteManyCommandHandler<ServiceEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ServiceEntityService.name)
  }

}
