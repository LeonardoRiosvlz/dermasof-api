import { CommandHandler } from '@nestjs/cqrs';
import { DeleteUserPositionCommand } from '../impl/delete-user-position.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { UserPositionService } from '../../../services/user-position.service';

@CommandHandler(DeleteUserPositionCommand)
export class DeleteUserPositionCommandHandler extends DeleteCommandHandler<UserPositionEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, UserPositionService.name)
  }
}
