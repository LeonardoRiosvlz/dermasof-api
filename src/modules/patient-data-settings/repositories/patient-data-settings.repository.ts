import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientDataSettingsEntity } from '../entities/patient-data-settings.entity';

@Injectable()
export class PatientDataSettingsRepository extends BaseRepository<PatientDataSettingsEntity, FilterableFieldsType<PatientDataSettingsEntity>> {
  constructor(
    @Inject(PatientDataSettingsEntity.name) private readonly _patientDataSettingsModel: Model<PatientDataSettingsEntity>,
  ) {
    super(_patientDataSettingsModel, PatientDataSettingsRepository.name);
  }
}
