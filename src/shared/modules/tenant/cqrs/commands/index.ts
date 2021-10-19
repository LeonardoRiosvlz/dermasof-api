import { CreateTenantCommandHandler } from './handler/create-tenant-command.handler';
import { DeleteTenantCommandHandler } from './handler/delete-tenant-command.handler';
import { UpdateTenantCommandHandler } from './handler/update-tenant-command.handler';

export const TenantCommandHandlers = [
  CreateTenantCommandHandler,
  DeleteTenantCommandHandler,
  UpdateTenantCommandHandler,
];
