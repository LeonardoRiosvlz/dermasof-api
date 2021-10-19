import { PathologiesEntity } from '../entities/pathologies.entity';

import { Injectable } from '@nestjs/common';
import { PathologiesResponse } from '../graphql/dto/responses/pathologies.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePathologiesInput } from '../graphql/dto/inputs/create-pathologies.input';

@Injectable()
export class PathologiesMapper implements BaseMapper<PathologiesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePathologiesInput>(dto: CreatePathologiesInput): PathologiesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PathologiesResponse>(dto: PathologiesResponse): PathologiesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PathologiesEntity): PathologiesResponse {
    return {
      ...persistentEntity,
    };
  }

}
