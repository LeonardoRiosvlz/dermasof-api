import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { SettingEntity } from '../../../entities/setting.entity';

export class UpdateSettingCommand extends UpdateCommand<SettingEntity> {
  constructor(public entityId: string, update: Partial<SettingEntity>) {
    super({entityId, update});
  }
}
