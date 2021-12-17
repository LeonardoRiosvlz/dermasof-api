import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AppointmentsEntity } from '../entities/appointments.entity';

@Injectable()
export class AppointmentsRepository extends BaseRepository<AppointmentsEntity, FilterableFieldsType<AppointmentsEntity>> {
  constructor(
    @Inject(AppointmentsEntity.name) private readonly _appointmentsModel: Model<AppointmentsEntity>,
  ) {
    super(_appointmentsModel, AppointmentsRepository.name);
  }
}
