import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedProductCategoryQuery } from '../impl/get-paginated-product-category.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { ProductCategoryEntityService } from '../../../services/product-category-entity.service';

@QueryHandler(GetPaginatedProductCategoryQuery)
export class GetPaginatedProductCategoryQueryHandler extends GetPaginatedQueryHandler<ProductCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductCategoryEntityService.name)
  }

}
