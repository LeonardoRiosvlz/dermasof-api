import { CommandHandler } from '@nestjs/cqrs';
import { UpdateSettingCommand } from '../impl/update-setting.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { SettingEntityService } from '../../../services/setting-entity.service';
import { SettingEntity } from '../../../entities/setting.entity';

@CommandHandler(UpdateSettingCommand)
export class UpdateSettingCommandHandler extends UpdateCommandHandler<SettingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SettingEntityService.name)
  }

}
