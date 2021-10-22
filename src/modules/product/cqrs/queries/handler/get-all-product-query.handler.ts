import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllProductQuery } from '../impl/get-all-product.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@QueryHandler(GetAllProductQuery)
export class GetAllProductQueryHandler extends GetAllQueryHandler<ProductEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductEntityService.name)
  }

}
