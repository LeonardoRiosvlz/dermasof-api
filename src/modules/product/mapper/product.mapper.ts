import { ProductEntity } from '../entities/product.entity';

import { Injectable } from '@nestjs/common';
import { ProductResponse } from '../graphql/dto/responses/product.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateProductInput } from '../graphql/dto/inputs/create-product.input';

@Injectable()
export class ProductMapper implements BaseMapper<ProductEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateProductInput>(dto: CreateProductInput): ProductEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ProductResponse>(dto: ProductResponse): ProductEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ProductEntity): ProductResponse {
    return {
      ...persistentEntity,
      category: persistentEntity?.category ? { id: persistentEntity.category } : undefined,
    };
  }

}
