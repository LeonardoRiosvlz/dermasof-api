import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { VitalSignsEntity } from '../entities/vital-signs.entity';

@Injectable()
export class VitalSignsRepository extends BaseRepository<VitalSignsEntity, FilterableFieldsType<VitalSignsEntity>> {
  constructor(
    @Inject(VitalSignsEntity.name) private readonly _vitalSignsModel: Model<VitalSignsEntity>,
  ) {
    super(_vitalSignsModel, VitalSignsRepository.name);
  }
}
