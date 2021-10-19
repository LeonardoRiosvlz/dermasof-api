import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneSettingQuery } from '../impl/get-one-setting.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@QueryHandler(GetOneSettingQuery)
export class GetOneSettingQueryHandler extends GetOneQueryHandler<SettingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SettingEntityService.name)
  }
}

