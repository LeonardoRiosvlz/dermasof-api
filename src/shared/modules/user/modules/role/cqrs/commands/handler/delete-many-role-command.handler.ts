import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyRoleCommand } from '../impl/delete-many-role.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { RoleEntity } from '../../../entities/role.entity';
import { RoleEntityService } from '../../../services/role-entity.service';

@CommandHandler(DeleteManyRoleCommand)
export class DeleteManyRoleCommandHandler extends DeleteManyCommandHandler<RoleEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RoleEntityService.name)
  }

}
