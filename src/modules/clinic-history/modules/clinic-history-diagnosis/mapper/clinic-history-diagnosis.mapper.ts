import { ClinicHistoryDiagnosisEntity } from '../entities/clinic-history-diagnosis.entity';

import { Injectable } from '@nestjs/common';
import { ClinicHistoryDiagnosisResponse } from '../graphql/dto/responses/clinic-history-diagnosis.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClinicHistoryDiagnosisInput } from '../graphql/dto/inputs/create-clinic-history-diagnosis.input';

@Injectable()
export class ClinicHistoryDiagnosisMapper implements BaseMapper<ClinicHistoryDiagnosisEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClinicHistoryDiagnosisInput>(dto: CreateClinicHistoryDiagnosisInput): ClinicHistoryDiagnosisEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClinicHistoryDiagnosisResponse>(dto: ClinicHistoryDiagnosisResponse): ClinicHistoryDiagnosisEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClinicHistoryDiagnosisEntity): ClinicHistoryDiagnosisResponse {
    return {
      ...persistentEntity,
      clinicHistory: persistentEntity?.clinicHistory ? { id: persistentEntity.clinicHistory } : undefined,
      diagnosisType: persistentEntity?.diagnosisType ? { id: persistentEntity.diagnosisType } : undefined,
      diagnosis: persistentEntity?.diagnosis ? { id: persistentEntity.diagnosis } : undefined,
    };
  }

}
