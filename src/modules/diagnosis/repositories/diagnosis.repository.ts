import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DiagnosisEntity } from '../entities/diagnosis.entity';

@Injectable()
export class DiagnosisRepository extends BaseRepository<DiagnosisEntity, FilterableFieldsType<DiagnosisEntity>> {
  constructor(
    @Inject(DiagnosisEntity.name) private readonly _diagnosisModel: Model<DiagnosisEntity>,
  ) {
    super(_diagnosisModel, DiagnosisRepository.name);
  }
}
