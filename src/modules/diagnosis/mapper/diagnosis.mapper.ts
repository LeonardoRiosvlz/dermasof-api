import { DiagnosisEntity } from '../entities/diagnosis.entity';

import { Injectable } from '@nestjs/common';
import { DiagnosisResponse } from '../graphql/dto/responses/diagnosis.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDiagnosisInput } from '../graphql/dto/inputs/create-diagnosis.input';

@Injectable()
export class DiagnosisMapper implements BaseMapper<DiagnosisEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDiagnosisInput>(dto: CreateDiagnosisInput): DiagnosisEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DiagnosisResponse>(dto: DiagnosisResponse): DiagnosisEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DiagnosisEntity): DiagnosisResponse {
    return {
      ...persistentEntity,
    };
  }

}
