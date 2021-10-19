import { UserPositionEntity } from '../entities/user-position.entity';

import { Injectable } from '@nestjs/common';
import { UserPositionResponse } from '../graphql/dto/responses/user-position.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateUserPositionInput } from '../graphql/dto/inputs/create-user-position.input';

@Injectable()
export class UserPositionMapper implements BaseMapper<UserPositionEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateUserPositionInput>(dto: CreateUserPositionInput): UserPositionEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = UserPositionResponse>(dto: UserPositionResponse): UserPositionEntity {
    return {
      ...dto,
    };
  }


  persistent2Dto(persistentEntity: UserPositionEntity): UserPositionResponse {
    return {
      ...persistentEntity,
    };
  }

}
