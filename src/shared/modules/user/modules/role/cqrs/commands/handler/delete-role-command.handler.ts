import { CommandHandler } from '@nestjs/cqrs';
import { DeleteRoleCommand } from '../impl/delete-role.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@CommandHandler(DeleteRoleCommand)
export class DeleteRoleCommandHandler extends DeleteCommandHandler<RoleEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RoleEntityService.name)
  }
}
