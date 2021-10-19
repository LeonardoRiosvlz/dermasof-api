import { OnCreatedTenantEventHandler } from './handler/on-created-tenant-event.handler';
import { OnDeletedTenantEventHandler } from './handler/on-deleted-tenant-event.handler';


export const TenantsEventsHandlers = [OnCreatedTenantEventHandler, OnDeletedTenantEventHandler]