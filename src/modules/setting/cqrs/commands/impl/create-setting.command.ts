import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { SettingEntity } from '../../../entities/setting.entity';

export class CreateSettingCommand extends CreateCommand<SettingEntity> {
  constructor(public request: SettingEntity) {
    super(request);
  }
}
