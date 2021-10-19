import { QueryHandler } from '@nestjs/cqrs';
import { GetAllTenantsQuery } from '../impl/get-all-tenants.query';
import { TenantEntity } from '../../../entities/tenant.entity';
import { ModuleRef } from '@nestjs/core';
import { TenantService } from '../../../services/tenant.service';
import { GetAllQueryHandler } from '../../../../app-cqrs/queries/handler/get-all-query.handler';


@QueryHandler(GetAllTenantsQuery)
export class GetAllTenantsQueryHandler extends GetAllQueryHandler<TenantEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TenantService.name)

  }

}
