import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProductCategoryEntity } from '../entities/product-category.entity';

@Injectable()
export class ProductCategoryRepository extends BaseRepository<ProductCategoryEntity, FilterableFieldsType<ProductCategoryEntity>> {
  constructor(
    @Inject(ProductCategoryEntity.name) private readonly _productCategoryModel: Model<ProductCategoryEntity>,
  ) {
    super(_productCategoryModel, ProductCategoryRepository.name);
  }
}
