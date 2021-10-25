import { ConsultationTypeEntity } from '../entities/consultation-type.entity';

import { Injectable } from '@nestjs/common';
import { ConsultationTypeResponse } from '../graphql/dto/responses/consultation-type.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateConsultationTypeInput } from '../graphql/dto/inputs/create-consultation-type.input';

@Injectable()
export class ConsultationTypeMapper implements BaseMapper<ConsultationTypeEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateConsultationTypeInput>(dto: CreateConsultationTypeInput): ConsultationTypeEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ConsultationTypeResponse>(dto: ConsultationTypeResponse): ConsultationTypeEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ConsultationTypeEntity): ConsultationTypeResponse {
    return {
      ...persistentEntity,
    };
  }

}
