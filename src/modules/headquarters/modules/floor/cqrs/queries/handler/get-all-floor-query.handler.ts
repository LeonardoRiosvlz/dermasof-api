import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFloorQuery } from '../impl/get-all-floor.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FloorEntity } from '../../../entities/floor.entity';
import { FloorEntityService } from '../../../services/floor-entity.service';

@QueryHandler(GetAllFloorQuery)
export class GetAllFloorQueryHandler extends GetAllQueryHandler<FloorEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FloorEntityService.name)
  }

}
