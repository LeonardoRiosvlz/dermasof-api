import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { __name__Entity } from '../entities/__name__(kebabCase).entity';

@Injectable()
export class __name__Repository extends BaseRepository<__name__Entity, FilterableFieldsType<__name__Entity>> {
  constructor(
    @Inject(__name__Entity.name) private readonly ___name__CamelCase__Model: Model<__name__Entity>,
  ) {
    super(___name__CamelCase__Model, __name__Repository.name);
  }
}
