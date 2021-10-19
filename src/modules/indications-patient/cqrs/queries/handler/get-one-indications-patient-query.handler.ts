import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneIndicationsPatientQuery } from '../impl/get-one-indications-patient.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@QueryHandler(GetOneIndicationsPatientQuery)
export class GetOneIndicationsPatientQueryHandler extends GetOneQueryHandler<IndicationsPatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IndicationsPatientEntityService.name)
  }
}

