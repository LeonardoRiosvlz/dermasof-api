import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryProcedureEntity } from '../entities/clinic-history-procedure.entity';

@Injectable()
export class ClinicHistoryProcedureRepository extends BaseRepository<ClinicHistoryProcedureEntity, FilterableFieldsType<ClinicHistoryProcedureEntity>> {
  constructor(
    @Inject(ClinicHistoryProcedureEntity.name) private readonly _clinicHistoryProcedureModel: Model<ClinicHistoryProcedureEntity>,
  ) {
    super(_clinicHistoryProcedureModel, ClinicHistoryProcedureRepository.name);
  }
}
