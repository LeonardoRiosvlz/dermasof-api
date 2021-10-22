import { CommandHandler } from '@nestjs/cqrs';
import { UpdateProductCategoryCommand } from '../impl/update-product-category.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';

@CommandHandler(UpdateProductCategoryCommand)
export class UpdateProductCategoryCommandHandler extends UpdateCommandHandler<ProductCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductCategoryEntityService.name)
  }

}
