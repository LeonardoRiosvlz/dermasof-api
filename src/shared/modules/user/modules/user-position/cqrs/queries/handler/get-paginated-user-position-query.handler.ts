import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedUserPositionQuery } from '../impl/get-paginated-user-position.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@QueryHandler(GetPaginatedUserPositionQuery)
export class GetPaginatedUserPositionQueryHandler extends GetPaginatedQueryHandler<UserPositionEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserPositionService.name)
  }

}
