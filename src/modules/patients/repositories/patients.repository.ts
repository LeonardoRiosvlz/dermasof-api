import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientsEntity } from '../entities/patients.entity';

@Injectable()
export class PatientsRepository extends BaseRepository<PatientsEntity, FilterableFieldsType<PatientsEntity>> {
  constructor(
    @Inject(PatientsEntity.name) private readonly _patientsModel: Model<PatientsEntity>,
  ) {
    super(_patientsModel, PatientsRepository.name);
  }
}
