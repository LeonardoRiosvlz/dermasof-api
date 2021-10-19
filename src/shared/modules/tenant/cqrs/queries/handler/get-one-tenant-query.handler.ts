import { QueryHandler } from '@nestjs/cqrs';
import { GetOneTenantQuery } from '../impl/get-one-tenant.query';
import { ModuleRef } from '@nestjs/core';

import { TenantEntity } from '../../../entities/tenant.entity';

import { GetOneQueryHandler } from '../../../../app-cqrs/queries/handler/get-one-query.handler';
import { TenantService } from '../../../services/tenant.service';

@QueryHandler(GetOneTenantQuery)
export class GetOneTenantQueryHandler extends GetOneQueryHandler<TenantEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TenantService.name )
  }

}
