import { CommandHandler } from '@nestjs/cqrs';
import { ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { UserService } from '../../../services/user.service';
import { DeleteManyUserCommand } from '../impl/delete-many-user.command';
import { DeleteManyCommandHandler } from '../../../../app-cqrs/commands/handler/delete-many-command.handler';

@CommandHandler(DeleteManyUserCommand)
export class DeleteManyUserCommandHandler extends DeleteManyCommandHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

    super(_moduleRef, UserService.name)
  }

}
