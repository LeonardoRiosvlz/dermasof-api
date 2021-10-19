import { OfficeEntity } from '../entities/office.entity';

import { Injectable } from '@nestjs/common';
import { OfficeResponse } from '../graphql/dto/responses/office.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateOfficeInput } from '../graphql/dto/inputs/create-office.input';

@Injectable()
export class OfficeMapper implements BaseMapper<OfficeEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateOfficeInput>(dto: CreateOfficeInput): OfficeEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = OfficeResponse>(dto: OfficeResponse): OfficeEntity {
    throw new Error('Implements Me!');
  }

  persistent2Dto(persistentEntity: OfficeEntity): OfficeResponse {
    return {
      ...persistentEntity,
      floor: persistentEntity?.floor ? { id: persistentEntity.floor } : undefined,
    };
  }

}
