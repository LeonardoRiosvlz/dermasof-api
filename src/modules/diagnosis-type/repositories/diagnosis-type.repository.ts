import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DiagnosisTypeEntity } from '../entities/diagnosis-type.entity';

@Injectable()
export class DiagnosisTypeRepository extends BaseRepository<DiagnosisTypeEntity, FilterableFieldsType<DiagnosisTypeEntity>> {
  constructor(
    @Inject(DiagnosisTypeEntity.name) private readonly _diagnosisTypeModel: Model<DiagnosisTypeEntity>,
  ) {
    super(_diagnosisTypeModel, DiagnosisTypeRepository.name);
  }
}
