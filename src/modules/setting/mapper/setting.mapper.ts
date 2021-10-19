import { SettingEntity } from '../entities/setting.entity';

import { Injectable } from '@nestjs/common';
import { SettingResponse } from '../graphql/dto/responses/setting.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateSettingInput } from '../graphql/dto/inputs/create-setting.input';

@Injectable()
export class SettingMapper implements BaseMapper<SettingEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateSettingInput>(dto: CreateSettingInput): SettingEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = SettingResponse>(dto: SettingResponse): SettingEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: SettingEntity): SettingResponse {
    return {
      ...persistentEntity,
      logo: persistentEntity?.logo ? { id: persistentEntity.logo } : undefined,
    };
  }

}
