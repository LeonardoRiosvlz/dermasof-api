import { QueryHandler } from '@nestjs/cqrs';
import { GetPaginatedUsersQuery } from '../impl/get-paginated-users.query';
import {  ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { UserService } from '../../../services/user.service';


@QueryHandler(GetPaginatedUsersQuery)
export class GetPaginatedUsersQueryHandler extends GetPaginatedQueryHandler<UserEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserService.name)
  }
}
