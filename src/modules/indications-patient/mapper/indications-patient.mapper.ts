import { IndicationsPatientEntity } from '../entities/indications-patient.entity';

import { Injectable } from '@nestjs/common';
import { IndicationsPatientResponse } from '../graphql/dto/responses/indications-patient.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateIndicationsPatientInput } from '../graphql/dto/inputs/create-indications-patient.input';

@Injectable()
export class IndicationsPatientMapper implements BaseMapper<IndicationsPatientEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateIndicationsPatientInput>(dto: CreateIndicationsPatientInput): IndicationsPatientEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = IndicationsPatientResponse>(dto: IndicationsPatientResponse): IndicationsPatientEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: IndicationsPatientEntity): IndicationsPatientResponse {
    return {
      ...persistentEntity,
    };
  }

}
