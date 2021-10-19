import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { PatientDataSettingsEntity } from '../entities/patient-data-settings.entity';
import { PatientDataSettingsRepository } from '../repositories/patient-data-settings.repository';


@Injectable()
export class PatientDataSettingsEntityService extends BaseEntityService<PatientDataSettingsEntity> {
  constructor(private readonly _patientDataSettingsRepo: PatientDataSettingsRepository) {
    super(_patientDataSettingsRepo, PatientDataSettingsEntity.name);
  }




}
