import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { IndicationsPatientEntity } from '../entities/indications-patient.entity';
import { IndicationsPatientRepository } from '../repositories/indications-patient.repository';


@Injectable()
export class IndicationsPatientEntityService extends BaseEntityService<IndicationsPatientEntity> {
  constructor(private readonly _indicationsPatientRepo: IndicationsPatientRepository) {
    super(_indicationsPatientRepo, IndicationsPatientEntity.name);
  }




}
