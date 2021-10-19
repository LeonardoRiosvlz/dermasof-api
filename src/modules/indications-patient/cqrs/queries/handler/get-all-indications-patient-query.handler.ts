import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllIndicationsPatientQuery } from '../impl/get-all-indications-patient.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@QueryHandler(GetAllIndicationsPatientQuery)
export class GetAllIndicationsPatientQueryHandler extends GetAllQueryHandler<IndicationsPatientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IndicationsPatientEntityService.name)
  }

}
