import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllRoleQuery } from '../impl/get-all-role.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@QueryHandler(GetAllRoleQuery)
export class GetAllRoleQueryHandler extends GetAllQueryHandler<RoleEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoleEntityService.name)
  }

}
