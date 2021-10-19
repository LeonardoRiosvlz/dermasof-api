import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedSettingQuery } from '../impl/get-paginated-setting.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { SettingEntity } from '../../../entities/setting.entity';
import { SettingEntityService } from '../../../services/setting-entity.service';

@QueryHandler(GetPaginatedSettingQuery)
export class GetPaginatedSettingQueryHandler extends GetPaginatedQueryHandler<SettingEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SettingEntityService.name)
  }

}
