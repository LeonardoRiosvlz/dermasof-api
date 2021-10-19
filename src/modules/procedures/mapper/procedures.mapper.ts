import { ProceduresEntity } from '../entities/procedures.entity';

import { Injectable } from '@nestjs/common';
import { ProceduresResponse } from '../graphql/dto/responses/procedures.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateProceduresInput } from '../graphql/dto/inputs/create-procedures.input';

@Injectable()
export class ProceduresMapper implements BaseMapper<ProceduresEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateProceduresInput>(dto: CreateProceduresInput): ProceduresEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ProceduresResponse>(dto: ProceduresResponse): ProceduresEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: ProceduresEntity): ProceduresResponse {
    return {
      ...persistentEntity,
    };
  }

}
