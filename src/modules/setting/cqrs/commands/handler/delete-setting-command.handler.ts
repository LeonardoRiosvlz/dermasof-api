import { CommandHandler } from '@nestjs/cqrs';
import { DeleteSettingCommand } from '../impl/delete-setting.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@CommandHandler(DeleteSettingCommand)
export class DeleteSettingCommandHandler extends DeleteCommandHandler<SettingEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SettingEntityService.name)
  }
}
