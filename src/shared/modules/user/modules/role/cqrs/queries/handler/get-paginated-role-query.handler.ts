import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedRoleQuery } from '../impl/get-paginated-role.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@QueryHandler(GetPaginatedRoleQuery)
export class GetPaginatedRoleQueryHandler extends GetPaginatedQueryHandler<RoleEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoleEntityService.name)
  }

}
