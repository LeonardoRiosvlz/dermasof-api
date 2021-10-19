import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { LaboratoryExamsEntity } from '../entities/laboratory-exams.entity';

@Injectable()
export class LaboratoryExamsRepository extends BaseRepository<LaboratoryExamsEntity, FilterableFieldsType<LaboratoryExamsEntity>> {
  constructor(
    @Inject(LaboratoryExamsEntity.name) private readonly _laboratoryExamsModel: Model<LaboratoryExamsEntity>,
  ) {
    super(_laboratoryExamsModel, LaboratoryExamsRepository.name);
  }
}
