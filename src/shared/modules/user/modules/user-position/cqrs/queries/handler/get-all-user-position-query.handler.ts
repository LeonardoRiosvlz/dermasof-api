import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllUserPositionQuery } from '../impl/get-all-user-position.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@QueryHandler(GetAllUserPositionQuery)
export class GetAllUserPositionQueryHandler extends GetAllQueryHandler<UserPositionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserPositionService.name)
  }

}
