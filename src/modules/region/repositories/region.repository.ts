import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { RegionEntity } from '../entities/region.entity';

@Injectable()
export class RegionRepository extends BaseRepository<RegionEntity, FilterableFieldsType<RegionEntity>> {
  constructor(
    @Inject(RegionEntity.name) private readonly _regionModel: Model<RegionEntity>,
  ) {
    super(_regionModel, RegionRepository.name);
  }
}
