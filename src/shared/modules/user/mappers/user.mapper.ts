import { UniqueEntityID } from '../../data-access/mongoose/UniqueEntityID';
import { Injectable } from '@nestjs/common';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../graphql/dto/input/create-user.input';
import { UserResponse } from '../graphql/dto/responses/user.response';

@Injectable()
export class UserMapper extends BaseMapper<UserEntity> {


  // @ts-ignore
  dtoInput2Persistent<DTO = CreateUserInput>(dto: CreateUserInput): UserEntity {
    // @ts-ignore
    return {
      id: new UniqueEntityID().toString(),
      verified: false,
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = UserResponse>(dto: UserResponse): UserEntity {
    return super.dtoResponse2Persistent(dto);
  }

  persistent2Dto({
                   id,
                   profile,
                   avatarFile,
                   roles,
                   ...rest
                 }: UserEntity): UserResponse {

    return {
      id,
      profile: {
        ...profile,
        area: profile?.area ? { id: profile.area } : undefined,
        position: profile?.position ? { id: profile.position } : undefined,
      },

      avatarFile: avatarFile ? { id: avatarFile } : undefined,
      roles: roles.map((x) => {
        return { id: x };
      }),
      ...rest,
    }
      ;
  }

}

