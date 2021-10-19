import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DataParameterizationEntity } from '../entities/data-parameterization.entity';

@Injectable()
export class DataParameterizationRepository extends BaseRepository<DataParameterizationEntity, FilterableFieldsType<DataParameterizationEntity>> {
  constructor(
    @Inject(DataParameterizationEntity.name) private readonly _dataParameterizationModel: Model<DataParameterizationEntity>,
  ) {
    super(_dataParameterizationModel, DataParameterizationRepository.name);
  }
}
