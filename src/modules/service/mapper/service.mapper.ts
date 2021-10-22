import { ServiceEntity } from '../entities/service.entity';

import { Injectable } from '@nestjs/common';
import { ServiceResponse } from '../graphql/dto/responses/service.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateServiceInput } from '../graphql/dto/inputs/create-service.input';

@Injectable()
export class ServiceMapper implements BaseMapper<ServiceEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateServiceInput>(dto: CreateServiceInput): ServiceEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ServiceResponse>(dto: ServiceResponse): ServiceEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ServiceEntity): ServiceResponse {
    return {
      ...persistentEntity,
      category: persistentEntity?.category ? { id: persistentEntity.category } : undefined,
    };
  }

}
