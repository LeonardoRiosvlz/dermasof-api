import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { SettingEntity } from '../../../entities/setting.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedSettingQuery extends GetPaginatedQuery<SettingEntity>{
  constructor(public request: GetPaginatedDto<SettingEntity>) {
    super(request)
  }
}
