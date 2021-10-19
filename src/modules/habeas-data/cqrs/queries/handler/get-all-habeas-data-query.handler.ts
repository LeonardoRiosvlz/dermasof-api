import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllHabeasDataQuery } from '../impl/get-all-habeas-data.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@QueryHandler(GetAllHabeasDataQuery)
export class GetAllHabeasDataQueryHandler extends GetAllQueryHandler<HabeasDataEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HabeasDataEntityService.name)
  }

}
