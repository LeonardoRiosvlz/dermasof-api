import { VitalSignsEntity } from '../entities/vital-signs.entity';

import { Injectable } from '@nestjs/common';
import { VitalSignsResponse } from '../graphql/dto/responses/vital-signs.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateVitalSignsInput } from '../graphql/dto/inputs/create-vital-signs.input';

@Injectable()
export class VitalSignsMapper implements BaseMapper<VitalSignsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateVitalSignsInput>(dto: CreateVitalSignsInput): VitalSignsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = VitalSignsResponse>(dto: VitalSignsResponse): VitalSignsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: VitalSignsEntity): VitalSignsResponse {
    return {
      ...persistentEntity,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
      consultationType: persistentEntity?.consultationType ? { id: persistentEntity.consultationType } : undefined,
    };
  }

}
