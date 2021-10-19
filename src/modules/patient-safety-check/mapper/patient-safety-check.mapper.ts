import { PatientSafetyCheckEntity } from '../entities/patient-safety-check.entity';

import { Injectable } from '@nestjs/common';
import { PatientSafetyCheckResponse } from '../graphql/dto/responses/patient-safety-check.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePatientSafetyCheckInput } from '../graphql/dto/inputs/create-patient-safety-check.input';

@Injectable()
export class PatientSafetyCheckMapper implements BaseMapper<PatientSafetyCheckEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePatientSafetyCheckInput>(dto: CreatePatientSafetyCheckInput): PatientSafetyCheckEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PatientSafetyCheckResponse>(dto: PatientSafetyCheckResponse): PatientSafetyCheckEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PatientSafetyCheckEntity): PatientSafetyCheckResponse {
    return {
      ...persistentEntity,
    };
  }

}
