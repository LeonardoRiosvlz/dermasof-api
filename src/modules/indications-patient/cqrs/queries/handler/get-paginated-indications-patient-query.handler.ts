import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedIndicationsPatientQuery } from '../impl/get-paginated-indications-patient.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@QueryHandler(GetPaginatedIndicationsPatientQuery)
export class GetPaginatedIndicationsPatientQueryHandler extends GetPaginatedQueryHandler<IndicationsPatientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, IndicationsPatientEntityService.name)
  }

}
