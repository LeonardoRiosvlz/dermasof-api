import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePatientsQuery } from '../impl/get-one-patients.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PatientsEntity } from '../../../entities/patients.entity';
import { PatientsEntityService } from '../../../services/patients-entity.service';

@QueryHandler(GetOnePatientsQuery)
export class GetOnePatientsQueryHandler extends GetOneQueryHandler<PatientsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientsEntityService.name)
  }
}

