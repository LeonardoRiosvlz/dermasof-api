import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedRegionQuery } from '../impl/get-paginated-region.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@QueryHandler(GetPaginatedRegionQuery)
export class GetPaginatedRegionQueryHandler extends GetPaginatedQueryHandler<RegionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RegionEntityService.name)
  }

}
