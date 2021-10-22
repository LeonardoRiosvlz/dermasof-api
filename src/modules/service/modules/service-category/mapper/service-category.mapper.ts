import { ServiceCategoryEntity } from '../entities/service-category.entity';

import { Injectable } from '@nestjs/common';
import { ServiceCategoryResponse } from '../graphql/dto/responses/service-category.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateServiceCategoryInput } from '../graphql/dto/inputs/create-service-category.input';

@Injectable()
export class ServiceCategoryMapper implements BaseMapper<ServiceCategoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateServiceCategoryInput>(dto: CreateServiceCategoryInput): ServiceCategoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ServiceCategoryResponse>(dto: ServiceCategoryResponse): ServiceCategoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ServiceCategoryEntity): ServiceCategoryResponse {
    return {
      ...persistentEntity,
    };
  }

}
