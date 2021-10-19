import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { HabeasDataEntity } from '../entities/habeas-data.entity';

@Injectable()
export class HabeasDataRepository extends BaseRepository<HabeasDataEntity, FilterableFieldsType<HabeasDataEntity>> {
  constructor(
    @Inject(HabeasDataEntity.name) private readonly _habeasDataModel: Model<HabeasDataEntity>,
  ) {
    super(_habeasDataModel, HabeasDataRepository.name);
  }
}
