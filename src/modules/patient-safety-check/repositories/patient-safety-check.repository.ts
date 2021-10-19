import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientSafetyCheckEntity } from '../entities/patient-safety-check.entity';

@Injectable()
export class PatientSafetyCheckRepository extends BaseRepository<PatientSafetyCheckEntity, FilterableFieldsType<PatientSafetyCheckEntity>> {
  constructor(
    @Inject(PatientSafetyCheckEntity.name) private readonly _patientSafetyCheckModel: Model<PatientSafetyCheckEntity>,
  ) {
    super(_patientSafetyCheckModel, PatientSafetyCheckRepository.name);
  }
}
