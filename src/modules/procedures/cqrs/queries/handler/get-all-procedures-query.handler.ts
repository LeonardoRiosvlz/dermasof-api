import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllProceduresQuery } from '../impl/get-all-procedures.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@QueryHandler(GetAllProceduresQuery)
export class GetAllProceduresQueryHandler extends GetAllQueryHandler<ProceduresEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProceduresEntityService.name)
  }

}
