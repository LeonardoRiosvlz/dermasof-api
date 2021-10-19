import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPatientSafetyCheckQuery } from '../impl/get-all-patient-safety-check.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@QueryHandler(GetAllPatientSafetyCheckQuery)
export class GetAllPatientSafetyCheckQueryHandler extends GetAllQueryHandler<PatientSafetyCheckEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientSafetyCheckEntityService.name)
  }

}
