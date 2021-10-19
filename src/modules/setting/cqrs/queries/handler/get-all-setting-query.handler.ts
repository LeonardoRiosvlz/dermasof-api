import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllSettingQuery } from '../impl/get-all-setting.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@QueryHandler(GetAllSettingQuery)
export class GetAllSettingQueryHandler extends GetAllQueryHandler<SettingEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SettingEntityService.name)
  }

}
