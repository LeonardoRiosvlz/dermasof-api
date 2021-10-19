import { CommandHandler } from '@nestjs/cqrs';
import { DeleteUserAreaCommand } from '../impl/delete-user-area.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@CommandHandler(DeleteUserAreaCommand)
export class DeleteUserAreaCommandHandler extends DeleteCommandHandler<UserAreaEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, UserAreaEntityService.name)
  }
}
