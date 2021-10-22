import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneProductCategoryQuery } from '../impl/get-one-product-category.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@QueryHandler(GetOneProductCategoryQuery)
export class GetOneProductCategoryQueryHandler extends GetOneQueryHandler<ProductCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductCategoryEntityService.name)
  }
}

