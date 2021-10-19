import { HabeasDataEntity } from '../entities/habeas-data.entity';

import { Injectable } from '@nestjs/common';
import { HabeasDataResponse } from '../graphql/dto/responses/habeas-data.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateHabeasDataInput } from '../graphql/dto/inputs/create-habeas-data.input';

@Injectable()
export class HabeasDataMapper implements BaseMapper<HabeasDataEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateHabeasDataInput>(dto: CreateHabeasDataInput): HabeasDataEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = HabeasDataResponse>(dto: HabeasDataResponse): HabeasDataEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: HabeasDataEntity): HabeasDataResponse {
    return {
      ...persistentEntity,
    };
  }

}
