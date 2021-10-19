import { CommandHandler } from '@nestjs/cqrs';

import { CreateUserAreaCommand } from '../impl/create-user-area.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@CommandHandler(CreateUserAreaCommand)
export class CreateUserAreaCommandHandler extends CreateCommandHandler<UserAreaEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserAreaEntityService.name);
  }

}
