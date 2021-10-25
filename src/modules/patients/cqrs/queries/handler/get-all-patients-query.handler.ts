import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPatientsQuery } from '../impl/get-all-patients.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PatientsEntity } from '../../../entities/patients.entity';
import { PatientsEntityService } from '../../../services/patients-entity.service';

@QueryHandler(GetAllPatientsQuery)
export class GetAllPatientsQueryHandler extends GetAllQueryHandler<PatientsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientsEntityService.name)
  }

}
