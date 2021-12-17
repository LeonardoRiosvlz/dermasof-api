import { ClinicHistoryProcedureEntity } from '../entities/clinic-history-procedure.entity';

import { Injectable } from '@nestjs/common';
import { ClinicHistoryProcedureResponse } from '../graphql/dto/responses/clinic-history-procedure.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateClinicHistoryProcedureInput } from '../graphql/dto/inputs/create-clinic-history-procedure.input';

@Injectable()
export class ClinicHistoryProcedureMapper implements BaseMapper<ClinicHistoryProcedureEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateClinicHistoryProcedureInput>(dto: CreateClinicHistoryProcedureInput): ClinicHistoryProcedureEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ClinicHistoryProcedureResponse>(dto: ClinicHistoryProcedureResponse): ClinicHistoryProcedureEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ClinicHistoryProcedureEntity): ClinicHistoryProcedureResponse {
    return {
      ...persistentEntity,
      clinicHistory: persistentEntity?.clinicHistory ? { id: persistentEntity.clinicHistory } : undefined,
      procedureType: persistentEntity?.procedureType ? { id: persistentEntity.procedureType } : undefined,
      region: Array.from(persistentEntity.region ?? []).map((x)=>{
        return{
          id: x
        }
      }),
    };
  }

}
