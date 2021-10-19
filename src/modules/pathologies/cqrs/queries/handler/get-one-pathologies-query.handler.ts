import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePathologiesQuery } from '../impl/get-one-pathologies.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@QueryHandler(GetOnePathologiesQuery)
export class GetOnePathologiesQueryHandler extends GetOneQueryHandler<PathologiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PathologiesEntityService.name)
  }
}

