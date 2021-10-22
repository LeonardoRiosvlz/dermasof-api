import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyServiceCategoryCommand } from '../impl/delete-many-service-category.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@CommandHandler(DeleteManyServiceCategoryCommand)
export class DeleteManyServiceCategoryCommandHandler extends DeleteManyCommandHandler<ServiceCategoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ServiceCategoryEntityService.name)
  }

}
