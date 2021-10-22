import { CommandHandler } from '@nestjs/cqrs';

import { CreateProductCategoryCommand } from '../impl/create-product-category.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@CommandHandler(CreateProductCategoryCommand)
export class CreateProductCategoryCommandHandler extends CreateCommandHandler<ProductCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductCategoryEntityService.name);
  }

}
