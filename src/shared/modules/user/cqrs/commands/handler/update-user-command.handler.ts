import { CommandHandler } from '@nestjs/cqrs';

import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { UserEntity } from '../../../entities/user.entity';
import { UserService } from '../../../services/user.service';
import { UpdateUserCommand } from '../impl/update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler extends UpdateCommandHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

    super(_moduleRef, UserService.name)
  }

}
