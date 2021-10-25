import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPatientsQuery } from '../impl/get-paginated-patients.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PatientsEntity } from '../../../entities/patients.entity';
import { PatientsEntityService } from '../../../services/patients-entity.service';

@QueryHandler(GetPaginatedPatientsQuery)
export class GetPaginatedPatientsQueryHandler extends GetPaginatedQueryHandler<PatientsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientsEntityService.name)
  }

}
