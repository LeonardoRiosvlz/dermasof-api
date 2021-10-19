import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IndicationsPatientEntity } from '../entities/indications-patient.entity';

@Injectable()
export class IndicationsPatientRepository extends BaseRepository<IndicationsPatientEntity, FilterableFieldsType<IndicationsPatientEntity>> {
  constructor(
    @Inject(IndicationsPatientEntity.name) private readonly _indicationsPatientModel: Model<IndicationsPatientEntity>,
  ) {
    super(_indicationsPatientModel, IndicationsPatientRepository.name);
  }
}
