import { GetAllTenantsQueryHandler } from './handler/get-all-tenants-query.handler';
import { GetOneTenantQueryHandler } from './handler/get-one-tenant-query.handler';
import { GetTenantConnectionQueryHandler } from './handler/get-tenant-connection-query.handler';
import { GetPaginatedTenantsQueryHandler } from './handler/get-paginated-tenants-query.handler';

export const TenantQueryHandlers = [
  GetAllTenantsQueryHandler,
  GetOneTenantQueryHandler,
  GetTenantConnectionQueryHandler,
  GetPaginatedTenantsQueryHandler
];
