import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneRoleQuery } from '../impl/get-one-role.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@QueryHandler(GetOneRoleQuery)
export class GetOneRoleQueryHandler extends GetOneQueryHandler<RoleEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, RoleEntityService.name)
  }
}

