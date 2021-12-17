import { RegionEntity } from '../entities/region.entity';

import { Injectable } from '@nestjs/common';
import { RegionResponse } from '../graphql/dto/responses/region.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateRegionInput } from '../graphql/dto/inputs/create-region.input';

@Injectable()
export class RegionMapper implements BaseMapper<RegionEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateRegionInput>(dto: CreateRegionInput): RegionEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = RegionResponse>(dto: RegionResponse): RegionEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: RegionEntity): RegionResponse {
    return {
      ...persistentEntity,
      photoFile: persistentEntity?.photoFile ? { id: persistentEntity.photoFile } : undefined,
    };
  }

}
