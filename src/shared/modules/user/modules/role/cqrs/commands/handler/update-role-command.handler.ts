import { CommandHandler } from '@nestjs/cqrs';
import { UpdateRoleCommand } from '../impl/update-role.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { RoleEntityService } from '../../../services/role-entity.service';
import { RoleEntity } from '../../../entities/role.entity';

@CommandHandler(UpdateRoleCommand)
export class UpdateRoleCommandHandler extends UpdateCommandHandler<RoleEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RoleEntityService.name)
  }

}
