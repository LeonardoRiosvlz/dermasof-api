import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedUserAreaQuery } from '../impl/get-paginated-user-area.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@QueryHandler(GetPaginatedUserAreaQuery)
export class GetPaginatedUserAreaQueryHandler extends GetPaginatedQueryHandler<UserAreaEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserAreaEntityService.name)
  }

}
