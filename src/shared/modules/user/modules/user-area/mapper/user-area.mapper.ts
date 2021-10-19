import { UserAreaEntity } from '../entities/user-area.entity';

import { Injectable } from '@nestjs/common';
import { UserAreaResponse } from '../graphql/dto/responses/user-area.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateUserAreaInput } from '../graphql/dto/inputs/create-user-area.input';

@Injectable()
export class UserAreaMapper implements BaseMapper<UserAreaEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateUserAreaInput>(dto: CreateUserAreaInput): UserAreaEntity {

    return {
      id: new UniqueEntityID().toString(),
      isActive: true,
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = UserAreaResponse>(dto: UserAreaResponse): UserAreaEntity {
    return {
      ...dto,
    };
  }


  persistent2Dto(persistentEntity: UserAreaEntity): UserAreaResponse {
    return {
      ...persistentEntity,
    };
  }

}
