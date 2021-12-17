import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClinicHistoryDiagnosisEntity } from '../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisRepository } from '../repositories/clinic-history-diagnosis.repository';


@Injectable()
export class ClinicHistoryDiagnosisEntityService extends BaseEntityService<ClinicHistoryDiagnosisEntity> {
  constructor(private readonly _clinicHistoryDiagnosisRepo: ClinicHistoryDiagnosisRepository) {
    super(_clinicHistoryDiagnosisRepo, ClinicHistoryDiagnosisEntity.name);
  }




}
