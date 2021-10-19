import { CommandHandler } from '@nestjs/cqrs';
import { DeleteTenantCommand } from '../impl/delete-tenant.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from '../../../../app-cqrs/commands/handler/delete-command.handler';
import { TenantEntity } from '../../../entities/tenant.entity';
import { TenantService } from '../../../services/tenant.service';

@CommandHandler(DeleteTenantCommand)
export class DeleteTenantCommandHandler extends DeleteCommandHandler<TenantEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TenantService.name);
  }

}
