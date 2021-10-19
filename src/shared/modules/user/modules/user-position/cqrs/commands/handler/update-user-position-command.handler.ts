import { CommandHandler } from '@nestjs/cqrs';
import { UpdateUserPositionCommand } from '../impl/update-user-position.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { UserPositionService } from '../../../services/user-position.service';
import { UserPositionEntity } from '../../../entities/user-position.entity';

@CommandHandler(UpdateUserPositionCommand)
export class UpdateUserPositionCommandHandler extends UpdateCommandHandler<UserPositionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserPositionService.name)
  }

}
