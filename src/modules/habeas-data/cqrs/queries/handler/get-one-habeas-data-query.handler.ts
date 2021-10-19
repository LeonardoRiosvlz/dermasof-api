import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneHabeasDataQuery } from '../impl/get-one-habeas-data.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@QueryHandler(GetOneHabeasDataQuery)
export class GetOneHabeasDataQueryHandler extends GetOneQueryHandler<HabeasDataEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HabeasDataEntityService.name)
  }
}

