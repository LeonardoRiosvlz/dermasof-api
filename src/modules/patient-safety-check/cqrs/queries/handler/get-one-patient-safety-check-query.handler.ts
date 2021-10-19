import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePatientSafetyCheckQuery } from '../impl/get-one-patient-safety-check.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@QueryHandler(GetOnePatientSafetyCheckQuery)
export class GetOnePatientSafetyCheckQueryHandler extends GetOneQueryHandler<PatientSafetyCheckEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientSafetyCheckEntityService.name)
  }
}

