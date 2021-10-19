import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedHabeasDataQuery } from '../impl/get-paginated-habeas-data.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { HabeasDataEntityService } from '../../../services/habeas-data-entity.service';

@QueryHandler(GetPaginatedHabeasDataQuery)
export class GetPaginatedHabeasDataQueryHandler extends GetPaginatedQueryHandler<HabeasDataEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HabeasDataEntityService.name)
  }

}
