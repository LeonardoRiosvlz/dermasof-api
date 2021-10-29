import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClinicHistoryEntity } from '../entities/clinic-history.entity';
import { ClinicHistoryRepository } from '../repositories/clinic-history.repository';


@Injectable()
export class ClinicHistoryEntityService extends BaseEntityService<ClinicHistoryEntity> {
  constructor(private readonly _clinicHistoryRepo: ClinicHistoryRepository) {
    super(_clinicHistoryRepo, ClinicHistoryEntity.name);
  }




}
