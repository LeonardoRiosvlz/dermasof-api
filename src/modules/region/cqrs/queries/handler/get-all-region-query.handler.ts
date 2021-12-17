import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllRegionQuery } from '../impl/get-all-region.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@QueryHandler(GetAllRegionQuery)
export class GetAllRegionQueryHandler extends GetAllQueryHandler<RegionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RegionEntityService.name)
  }

}
