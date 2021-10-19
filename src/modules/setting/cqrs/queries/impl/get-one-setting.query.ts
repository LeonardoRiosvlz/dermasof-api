import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { SettingEntity } from '../../../entities/setting.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneSettingQuery extends GetOneQuery<SettingEntity>{
  constructor(public request: GetOneDto<SettingEntity>) {
    super(request)
  }
}
