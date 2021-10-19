import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTenantsQuery } from '../impl/get-all-tenants.query';
import { TenantRepository } from '../../../repositories/tenant.repository';
import { TenantEntity } from '../../../entities/tenant.entity';
import { Result } from '../../../../../core/class/result';
import { GetPaginatedTenantInput } from '../../../graphql/dto/input/get-paginated-tenant.input';
import { GetPaginatedTenantsQuery } from '../impl/get-paginated-tenants.query';
import { ModuleRef } from '@nestjs/core';
import { TenantService } from '../../../services/tenant.service';
import { GetPaginatedQueryHandler } from '../../../../app-cqrs/queries/handler/get-paginated-query.handler';


@QueryHandler(GetPaginatedTenantsQuery)
export class GetPaginatedTenantsQueryHandler extends GetPaginatedQueryHandler<TenantEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TenantService.name)
  }

}
