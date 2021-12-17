import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryDiagnosisEntity } from '../entities/clinic-history-diagnosis.entity';

@Injectable()
export class ClinicHistoryDiagnosisRepository extends BaseRepository<ClinicHistoryDiagnosisEntity, FilterableFieldsType<ClinicHistoryDiagnosisEntity>> {
  constructor(
    @Inject(ClinicHistoryDiagnosisEntity.name) private readonly _clinicHistoryDiagnosisModel: Model<ClinicHistoryDiagnosisEntity>,
  ) {
    super(_clinicHistoryDiagnosisModel, ClinicHistoryDiagnosisRepository.name);
  }
}
