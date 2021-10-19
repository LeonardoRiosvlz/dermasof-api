import { CommandHandler } from '@nestjs/cqrs';

import { CreateRoleCommand } from '../impl/create-role.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@CommandHandler(CreateRoleCommand)
export class CreateRoleCommandHandler extends CreateCommandHandler<RoleEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RoleEntityService.name);
  }

}
