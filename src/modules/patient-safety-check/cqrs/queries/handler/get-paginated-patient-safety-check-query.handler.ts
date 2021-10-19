import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPatientSafetyCheckQuery } from '../impl/get-paginated-patient-safety-check.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { PatientSafetyCheckEntityService } from '../../../services/patient-safety-check-entity.service';

@QueryHandler(GetPaginatedPatientSafetyCheckQuery)
export class GetPaginatedPatientSafetyCheckQueryHandler extends GetPaginatedQueryHandler<PatientSafetyCheckEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientSafetyCheckEntityService.name)
  }

}
