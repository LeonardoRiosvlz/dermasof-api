import { CommandHandler } from '@nestjs/cqrs';
import { UpdateUserAreaCommand } from '../impl/update-user-area.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';
import { UserAreaEntity } from '../../../entities/user-area.entity';

@CommandHandler(UpdateUserAreaCommand)
export class UpdateUserAreaCommandHandler extends UpdateCommandHandler<UserAreaEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserAreaEntityService.name)
  }

}
