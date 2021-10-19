import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { PatientSafetyCheckEntity } from '../entities/patient-safety-check.entity';
import { PatientSafetyCheckRepository } from '../repositories/patient-safety-check.repository';


@Injectable()
export class PatientSafetyCheckEntityService extends BaseEntityService<PatientSafetyCheckEntity> {
  constructor(private readonly _patientSafetyCheckRepo: PatientSafetyCheckRepository) {
    super(_patientSafetyCheckRepo, PatientSafetyCheckEntity.name);
  }




}
