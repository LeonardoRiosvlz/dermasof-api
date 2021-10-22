import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';


@Injectable()
export class ProductEntityService extends BaseEntityService<ProductEntity> {
  constructor(private readonly _productRepo: ProductRepository) {
    super(_productRepo, ProductEntity.name);
  }




}
