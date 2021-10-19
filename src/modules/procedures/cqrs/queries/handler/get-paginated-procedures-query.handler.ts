import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedProceduresQuery } from '../impl/get-paginated-procedures.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { ProceduresEntityService } from '../../../services/procedures-entity.service';

@QueryHandler(GetPaginatedProceduresQuery)
export class GetPaginatedProceduresQueryHandler extends GetPaginatedQueryHandler<ProceduresEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProceduresEntityService.name)
  }

}
