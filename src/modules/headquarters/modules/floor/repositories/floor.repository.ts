import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FloorEntity } from '../entities/floor.entity';

@Injectable()
export class FloorRepository extends BaseRepository<FloorEntity, FilterableFieldsType<FloorEntity>> {
  constructor(
    @Inject(FloorEntity.name) private readonly _floorModel: Model<FloorEntity>,
  ) {
    super(_floorModel, FloorRepository.name);
  }
}
