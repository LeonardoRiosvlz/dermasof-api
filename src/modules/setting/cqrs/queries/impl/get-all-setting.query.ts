import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { SettingEntity } from '../../../entities/setting.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllSettingQuery extends GetAllQuery<SettingEntity>{
  constructor(public request: GetAllDto<SettingEntity>) {
    super(request)
  }
}
