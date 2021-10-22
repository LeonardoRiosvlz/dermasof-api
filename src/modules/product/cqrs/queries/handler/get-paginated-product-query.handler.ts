import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedProductQuery } from '../impl/get-paginated-product.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@QueryHandler(GetPaginatedProductQuery)
export class GetPaginatedProductQueryHandler extends GetPaginatedQueryHandler<ProductEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductEntityService.name)
  }

}
