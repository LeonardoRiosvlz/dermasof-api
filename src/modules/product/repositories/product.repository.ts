import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends BaseRepository<ProductEntity, FilterableFieldsType<ProductEntity>> {
  constructor(
    @Inject(ProductEntity.name) private readonly _productModel: Model<ProductEntity>,
  ) {
    super(_productModel, ProductRepository.name);
  }
}
