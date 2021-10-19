import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { HeadquartersEntity } from '../entities/headquarters.entity';

@Injectable()
export class HeadquartersRepository extends BaseRepository<HeadquartersEntity, FilterableFieldsType<HeadquartersEntity>> {
  constructor(
    @Inject(HeadquartersEntity.name) private readonly _headquartersModel: Model<HeadquartersEntity>,
  ) {
    super(_headquartersModel, HeadquartersRepository.name);
  }
}
