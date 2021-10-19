import { CommandHandler } from '@nestjs/cqrs';

import { UpdateTenantCommand } from '../impl/update-tenant.command';

import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from '../../../../app-cqrs/commands/handler/update-command.handler';
import { TenantEntity } from '../../../entities/tenant.entity';
import { TenantService } from '../../../services/tenant.service';

@CommandHandler(UpdateTenantCommand)
export class UpdateTenantCommandHandler extends UpdateCommandHandler<TenantEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

    super(_moduleRef, TenantService.name)
  }


}
