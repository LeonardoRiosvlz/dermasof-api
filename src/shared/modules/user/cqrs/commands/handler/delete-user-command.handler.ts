import { CommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../impl/delete-user.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { UserEntity } from '../../../entities/user.entity';
import { UserService } from '../../../services/user.service';

@CommandHandler(DeleteUserCommand)
export class DeleteUserCommandHandler extends DeleteCommandHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

    super(_moduleRef, UserService.name)
  }

}
