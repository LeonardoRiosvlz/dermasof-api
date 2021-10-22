import { CommandHandler } from '@nestjs/cqrs';
import { DeleteProductCategoryCommand } from '../impl/delete-product-category.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@CommandHandler(DeleteProductCategoryCommand)
export class DeleteProductCategoryCommandHandler extends DeleteCommandHandler<ProductCategoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductCategoryEntityService.name)
  }
}
