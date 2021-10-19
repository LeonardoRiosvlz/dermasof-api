import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneProceduresQuery } from '../impl/get-one-procedures.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@QueryHandler(GetOneProceduresQuery)
export class GetOneProceduresQueryHandler extends GetOneQueryHandler<ProceduresEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProceduresEntityService.name)
  }
}

