import { HeadquartersEntity } from '../entities/headquarters.entity';

import { Injectable } from '@nestjs/common';
import { HeadquartersResponse } from '../graphql/dto/responses/headquarters.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateHeadquartersInput } from '../graphql/dto/inputs/create-headquarters.input';

@Injectable()
export class HeadquartersMapper implements BaseMapper<HeadquartersEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateHeadquartersInput>(dto: CreateHeadquartersInput): HeadquartersEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = HeadquartersResponse>(dto: HeadquartersResponse): HeadquartersEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: HeadquartersEntity): HeadquartersResponse {
    return {
      ...persistentEntity,
      manager: {id: persistentEntity.manager } 
    };
  }

}
