import { FloorEntity } from '../entities/floor.entity';

import { Injectable } from '@nestjs/common';
import { FloorResponse } from '../graphql/dto/responses/floor.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFloorInput } from '../graphql/dto/inputs/create-floor.input';

@Injectable()
export class FloorMapper implements BaseMapper<FloorEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFloorInput>(dto: CreateFloorInput): FloorEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FloorResponse>(dto: FloorResponse): FloorEntity {
    throw new Error('Implements Me!');
  }


  persistent2Dto(persistentEntity: FloorEntity): FloorResponse {
    return {
      ...persistentEntity,
      headquarter: persistentEntity?.headquarter ? { id: persistentEntity.headquarter } : undefined,
    };
  }

}
