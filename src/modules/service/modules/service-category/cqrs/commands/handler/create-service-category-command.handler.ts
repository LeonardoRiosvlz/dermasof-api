import { CommandHandler } from '@nestjs/cqrs';

import { CreateServiceCategoryCommand } from '../impl/create-service-category.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@CommandHandler(CreateServiceCategoryCommand)
export class CreateServiceCategoryCommandHandler extends CreateCommandHandler<ServiceCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ServiceCategoryEntityService.name);
  }

}
