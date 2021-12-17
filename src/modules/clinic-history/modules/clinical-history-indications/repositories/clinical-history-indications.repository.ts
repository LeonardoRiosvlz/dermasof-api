import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicalHistoryIndicationsEntity } from '../entities/clinical-history-indications.entity';

@Injectable()
export class ClinicalHistoryIndicationsRepository extends BaseRepository<ClinicalHistoryIndicationsEntity, FilterableFieldsType<ClinicalHistoryIndicationsEntity>> {
  constructor(
    @Inject(ClinicalHistoryIndicationsEntity.name) private readonly _clinicalHistoryIndicationsModel: Model<ClinicalHistoryIndicationsEntity>,
  ) {
    super(_clinicalHistoryIndicationsModel, ClinicalHistoryIndicationsRepository.name);
  }
}
