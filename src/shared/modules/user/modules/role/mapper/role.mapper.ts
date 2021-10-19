import { RoleEntity } from '../entities/role.entity';

import { Injectable } from '@nestjs/common';
import { RoleResponse } from '../graphql/dto/responses/role.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateRoleInput } from '../graphql/dto/inputs/create-role.input';

@Injectable()
export class RoleMapper implements BaseMapper<RoleEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateRoleInput>({ name, description, permits }: CreateRoleInput): RoleEntity {
    return {
      id: new UniqueEntityID().toString(),
      permits,
      name,
      description
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = RoleResponse>(dto: RoleResponse): RoleEntity {
    throw new Error('Not Implementation')
  }


  persistent2Dto(entity: RoleEntity): RoleResponse {
    return {
      ...entity,
    };
  }

}
