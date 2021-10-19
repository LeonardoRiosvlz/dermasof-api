import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTenantConnectionQuery } from '../impl/get-tenant-connection.query';
import { Inject } from '@nestjs/common';

import { Connection } from 'mongoose';
import { IAppTenantConnectionService } from '../../../services/tenant.connection.service';
import { Result } from '../../../../../core/class/result';

@QueryHandler(GetTenantConnectionQuery)
export class GetTenantConnectionQueryHandler implements IQueryHandler<GetTenantConnectionQuery> {
  constructor(
    @Inject(IAppTenantConnectionService.$) private readonly _tenantConnectionService: IAppTenantConnectionService,
  ) {
  }

  async execute({ tenant }: GetTenantConnectionQuery) : Promise<Result<Connection>> {
    return this._tenantConnectionService.getTenantConnection(tenant);
  }

}
