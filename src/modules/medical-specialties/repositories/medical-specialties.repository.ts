import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MedicalSpecialtiesEntity } from '../entities/medical-specialties.entity';

@Injectable()
export class MedicalSpecialtiesRepository extends BaseRepository<MedicalSpecialtiesEntity, FilterableFieldsType<MedicalSpecialtiesEntity>> {
  constructor(
    @Inject(MedicalSpecialtiesEntity.name) private readonly _medicalSpecialtiesModel: Model<MedicalSpecialtiesEntity>,
  ) {
    super(_medicalSpecialtiesModel, MedicalSpecialtiesRepository.name);
  }
}
