import { CommandHandler } from '@nestjs/cqrs';


import { ModuleRef } from '@nestjs/core';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserService } from '../../../services/user.service';
import { UserEntity } from '../../../entities/user.entity';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler extends CreateCommandHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserService.name)
  }

}
