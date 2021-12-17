import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClinicHistoryProcedureEntity } from '../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureRepository } from '../repositories/clinic-history-procedure.repository';


@Injectable()
export class ClinicHistoryProcedureEntityService extends BaseEntityService<ClinicHistoryProcedureEntity> {
  constructor(private readonly _clinicHistoryProcedureRepo: ClinicHistoryProcedureRepository) {
    super(_clinicHistoryProcedureRepo, ClinicHistoryProcedureEntity.name);
  }




}
