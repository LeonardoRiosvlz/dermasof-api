import { DiagnosisTypeEntity } from '../entities/diagnosis-type.entity';

import { Injectable } from '@nestjs/common';
import { DiagnosisTypeResponse } from '../graphql/dto/responses/diagnosis-type.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDiagnosisTypeInput } from '../graphql/dto/inputs/create-diagnosis-type.input';

@Injectable()
export class DiagnosisTypeMapper implements BaseMapper<DiagnosisTypeEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDiagnosisTypeInput>(dto: CreateDiagnosisTypeInput): DiagnosisTypeEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DiagnosisTypeResponse>(dto: DiagnosisTypeResponse): DiagnosisTypeEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DiagnosisTypeEntity): DiagnosisTypeResponse {
    return {
      ...persistentEntity,
    };
  }

}
