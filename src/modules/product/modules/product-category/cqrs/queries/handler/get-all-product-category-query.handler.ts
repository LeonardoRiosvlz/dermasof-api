import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllProductCategoryQuery } from '../impl/get-all-product-category.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@QueryHandler(GetAllProductCategoryQuery)
export class GetAllProductCategoryQueryHandler extends GetAllQueryHandler<ProductCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductCategoryEntityService.name)
  }

}
