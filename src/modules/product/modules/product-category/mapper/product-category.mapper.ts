import { ProductCategoryEntity } from '../entities/product-category.entity';

import { Injectable } from '@nestjs/common';
import { ProductCategoryResponse } from '../graphql/dto/responses/product-category.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateProductCategoryInput } from '../graphql/dto/inputs/create-product-category.input';

@Injectable()
export class ProductCategoryMapper implements BaseMapper<ProductCategoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateProductCategoryInput>(dto: CreateProductCategoryInput): ProductCategoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ProductCategoryResponse>(dto: ProductCategoryResponse): ProductCategoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ProductCategoryEntity): ProductCategoryResponse {
    return {
      ...persistentEntity,
    };
  }

}
