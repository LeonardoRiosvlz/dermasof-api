import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClinicalHistoryIndicationsEntity } from '../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsRepository } from '../repositories/clinical-history-indications.repository';


@Injectable()
export class ClinicalHistoryIndicationsEntityService extends BaseEntityService<ClinicalHistoryIndicationsEntity> {
  constructor(private readonly _clinicalHistoryIndicationsRepo: ClinicalHistoryIndicationsRepository) {
    super(_clinicalHistoryIndicationsRepo, ClinicalHistoryIndicationsEntity.name);
  }




}
