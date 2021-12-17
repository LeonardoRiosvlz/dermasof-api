import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { AppointmentsEntity } from '../entities/appointments.entity';
import { AppointmentsRepository } from '../repositories/appointments.repository';


@Injectable()
export class AppointmentsEntityService extends BaseEntityService<AppointmentsEntity> {
  constructor(private readonly _appointmentsRepo: AppointmentsRepository) {
    super(_appointmentsRepo, AppointmentsEntity.name);
  }




}
