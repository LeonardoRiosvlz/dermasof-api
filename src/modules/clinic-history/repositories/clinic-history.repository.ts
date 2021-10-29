import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryEntity } from '../entities/clinic-history.entity';

@Injectable()
export class ClinicHistoryRepository extends BaseRepository<ClinicHistoryEntity, FilterableFieldsType<ClinicHistoryEntity>> {
  constructor(
    @Inject(ClinicHistoryEntity.name) private readonly _clinicHistoryModel: Model<ClinicHistoryEntity>,
  ) {
    super(_clinicHistoryModel, ClinicHistoryRepository.name);
  }
}
