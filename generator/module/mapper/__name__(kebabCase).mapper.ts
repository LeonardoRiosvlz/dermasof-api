import { __name__Entity } from '../entities/__name__(kebabCase).entity';

import { Injectable } from '@nestjs/common';
import { __name__Response } from '../graphql/dto/responses/__name__(kebabCase).response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { Create__name__Input } from '../graphql/dto/inputs/create-__name__(kebabCase).input';

@Injectable()
export class __name__Mapper implements BaseMapper<__name__Entity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = Create__name__Input>(dto: Create__name__Input): __name__Entity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = __name__Response>(dto: __name__Response): __name__Entity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: __name__Entity): __name__Response {
    return {
      ...persistentEntity,
    };
  }

}
