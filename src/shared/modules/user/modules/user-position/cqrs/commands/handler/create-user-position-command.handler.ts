import { CommandHandler } from '@nestjs/cqrs';

import { CreateUserPositionCommand } from '../impl/create-user-position.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@CommandHandler(CreateUserPositionCommand)
export class CreateUserPositionCommandHandler extends CreateCommandHandler<UserPositionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserPositionService.name);
  }

}
