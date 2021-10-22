import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneProductQuery } from '../impl/get-one-product.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@QueryHandler(GetOneProductQuery)
export class GetOneProductQueryHandler extends GetOneQueryHandler<ProductEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductEntityService.name)
  }
}

