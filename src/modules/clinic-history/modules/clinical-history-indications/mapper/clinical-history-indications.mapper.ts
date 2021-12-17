import { ClinicalHistoryIndicationsEntity } from '../entities/clinical-history-indications.entity';

import { Injectable } from '@nestjs/common';
import { ClinicalHistoryIndicationsResponse } from '../graphql/dto/responses/clinical-history-indications.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClinicalHistoryIndicationsInput } from '../graphql/dto/inputs/create-clinical-history-indications.input';

@Injectable()
export class ClinicalHistoryIndicationsMapper implements BaseMapper<ClinicalHistoryIndicationsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClinicalHistoryIndicationsInput>(dto: CreateClinicalHistoryIndicationsInput): ClinicalHistoryIndicationsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClinicalHistoryIndicationsResponse>(dto: ClinicalHistoryIndicationsResponse): ClinicalHistoryIndicationsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClinicalHistoryIndicationsEntity): ClinicalHistoryIndicationsResponse {
    return {
      ...persistentEntity, 
      clinicHistory: persistentEntity?.clinicHistory ? { id: persistentEntity.clinicHistory } : undefined,
      indications: persistentEntity?.indications ? { id: persistentEntity.indications } : undefined,
    };
  }

}
