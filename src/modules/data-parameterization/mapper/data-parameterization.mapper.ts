import { DataParameterizationEntity } from '../entities/data-parameterization.entity';

import { Injectable } from '@nestjs/common';
import { DataParameterizationResponse } from '../graphql/dto/responses/data-parameterization.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDataParameterizationInput } from '../graphql/dto/inputs/create-data-parameterization.input';

@Injectable()
export class DataParameterizationMapper implements BaseMapper<DataParameterizationEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDataParameterizationInput>(dto: CreateDataParameterizationInput): DataParameterizationEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DataParameterizationResponse>(dto: DataParameterizationResponse): DataParameterizationEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DataParameterizationEntity): DataParameterizationResponse {
    return {
      ...persistentEntity,
    };
  }

}
