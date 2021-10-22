import { CommandHandler } from '@nestjs/cqrs';
import { DeleteServiceCategoryCommand } from '../impl/delete-service-category.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@CommandHandler(DeleteServiceCategoryCommand)
export class DeleteServiceCategoryCommandHandler extends DeleteCommandHandler<ServiceCategoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ServiceCategoryEntityService.name)
  }
}
