import { CommandHandler } from '@nestjs/cqrs';

import { CreateTenantCommand } from '../impl/create-tenant.command';
import { TenantEntity } from '../../../entities/tenant.entity';
import { ModuleRef } from '@nestjs/core';
import { TenantService } from '../../../services/tenant.service';
import { CreateCommandHandler } from '../../../../app-cqrs/commands/handler/create-command.handler';

@CommandHandler(CreateTenantCommand)
export class CreateTenantCommandHandler extends CreateCommandHandler<TenantEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TenantService.name)
  }


}
