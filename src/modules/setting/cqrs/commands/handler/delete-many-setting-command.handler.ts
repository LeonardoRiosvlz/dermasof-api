import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManySettingCommand } from '../impl/delete-many-setting.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@CommandHandler(DeleteManySettingCommand)
export class DeleteManySettingCommandHandler extends DeleteManyCommandHandler<SettingEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SettingEntityService.name)
  }

}
