import { CommandHandler } from '@nestjs/cqrs';

import { CreateSettingCommand } from '../impl/create-setting.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@CommandHandler(CreateSettingCommand)
export class CreateSettingCommandHandler extends CreateCommandHandler<SettingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SettingEntityService.name);
  }

}
