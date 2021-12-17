import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneRegionQuery } from '../impl/get-one-region.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { RegionEntity } from '../../../entities/region.entity';
import { RegionEntityService } from '../../../services/region-entity.service';

@QueryHandler(GetOneRegionQuery)
export class GetOneRegionQueryHandler extends GetOneQueryHandler<RegionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RegionEntityService.name)
  }
}

