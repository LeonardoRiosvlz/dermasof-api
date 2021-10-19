import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPathologiesQuery } from '../impl/get-all-pathologies.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@QueryHandler(GetAllPathologiesQuery)
export class GetAllPathologiesQueryHandler extends GetAllQueryHandler<PathologiesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PathologiesEntityService.name)
  }

}
