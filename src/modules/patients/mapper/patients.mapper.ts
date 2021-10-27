import { PatientsEntity } from '../entities/patients.entity';

import { Injectable } from '@nestjs/common';
import { PatientsResponse } from '../graphql/dto/responses/patients.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePatientsInput } from '../graphql/dto/inputs/create-patients.input';

@Injectable()
export class PatientsMapper implements BaseMapper<PatientsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePatientsInput>(dto: CreatePatientsInput): PatientsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PatientsResponse>(dto: PatientsResponse): PatientsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PatientsEntity): PatientsResponse {
    return {
      ...persistentEntity,
      signature: persistentEntity?.signature ? { id: persistentEntity.signature } : undefined,
      photoFile: persistentEntity?.photoFile ? { id: persistentEntity.photoFile } : undefined,
      headquarters: persistentEntity?.headquarters ? { id: persistentEntity.headquarters } : undefined,
      habeasData: persistentEntity?.habeasData ? { id: persistentEntity.habeasData } : undefined,
    };
  }

}
