import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { SettingEntity } from '../../../entities/setting.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManySettingCommand extends DeleteManyCommand<SettingEntity>{
  constructor(public request: GetOneDto<SettingEntity>) {
    super(request)
  }
}
