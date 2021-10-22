import { CommandHandler } from '@nestjs/cqrs';
import { UpdateServiceCategoryCommand } from '../impl/update-service-category.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';

@CommandHandler(UpdateServiceCategoryCommand)
export class UpdateServiceCategoryCommandHandler extends UpdateCommandHandler<ServiceCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ServiceCategoryEntityService.name)
  }

}
