import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ConsultationTypeEntity } from '../entities/consultation-type.entity';

@Injectable()
export class ConsultationTypeRepository extends BaseRepository<ConsultationTypeEntity, FilterableFieldsType<ConsultationTypeEntity>> {
  constructor(
    @Inject(ConsultationTypeEntity.name) private readonly _consultationTypeModel: Model<ConsultationTypeEntity>,
  ) {
    super(_consultationTypeModel, ConsultationTypeRepository.name);
  }
}
