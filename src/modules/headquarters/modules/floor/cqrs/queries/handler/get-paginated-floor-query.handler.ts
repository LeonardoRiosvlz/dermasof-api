import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFloorQuery } from '../impl/get-paginated-floor.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@QueryHandler(GetPaginatedFloorQuery)
export class GetPaginatedFloorQueryHandler extends GetPaginatedQueryHandler<FloorEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FloorEntityService.name)
  }

}
