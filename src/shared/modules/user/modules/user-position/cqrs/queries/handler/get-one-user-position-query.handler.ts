import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneUserPositionQuery } from '../impl/get-one-user-position.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@QueryHandler(GetOneUserPositionQuery)
export class GetOneUserPositionQueryHandler extends GetOneQueryHandler<UserPositionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserPositionService.name)
  }
}

