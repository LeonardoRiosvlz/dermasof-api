import { ClinicHistoryEntity } from '../entities/clinic-history.entity';

import { Injectable } from '@nestjs/common';
import { ClinicHistoryResponse } from '../graphql/dto/responses/clinic-history.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClinicHistoryInput } from '../graphql/dto/inputs/create-clinic-history.input';

@Injectable()
export class ClinicHistoryMapper implements BaseMapper<ClinicHistoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClinicHistoryInput>(dto: CreateClinicHistoryInput): ClinicHistoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClinicHistoryResponse>(dto: ClinicHistoryResponse): ClinicHistoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClinicHistoryEntity): ClinicHistoryResponse {
    return {
      ...persistentEntity,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
      diagnosis: persistentEntity.diagnosis.map((x)=>{
        return{
          id: x
        }
      }),
      indications: persistentEntity.indications.map((x)=>{
        return{
          id: x
        }
      }),
    };
  }

}
