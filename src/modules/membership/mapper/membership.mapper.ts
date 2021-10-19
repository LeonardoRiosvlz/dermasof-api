import { MembershipEntity } from '../entities/membership.entity';

import { Injectable } from '@nestjs/common';
import { MembershipResponse } from '../graphql/dto/responses/membership.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateMembershipInput } from '../graphql/dto/inputs/create-membership.input';

@Injectable()
export class MembershipMapper implements BaseMapper<MembershipEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateMembershipInput>(dto: CreateMembershipInput): MembershipEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = MembershipResponse>(dto: MembershipResponse): MembershipEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: MembershipEntity): MembershipResponse {
    return {
      ...persistentEntity,
    };
  }

}
