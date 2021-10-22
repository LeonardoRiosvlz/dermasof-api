import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyProductCategoryCommand } from '../impl/delete-many-product-category.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@CommandHandler(DeleteManyProductCategoryCommand)
export class DeleteManyProductCategoryCommandHandler extends DeleteManyCommandHandler<ProductCategoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductCategoryEntityService.name)
  }

}
