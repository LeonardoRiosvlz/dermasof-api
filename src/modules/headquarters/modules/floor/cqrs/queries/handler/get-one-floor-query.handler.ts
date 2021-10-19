import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFloorQuery } from '../impl/get-one-floor.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@QueryHandler(GetOneFloorQuery)
export class GetOneFloorQueryHandler extends GetOneQueryHandler<FloorEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FloorEntityService.name)
  }
}

