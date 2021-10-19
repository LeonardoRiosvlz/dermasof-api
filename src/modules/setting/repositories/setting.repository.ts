import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SettingEntity } from '../entities/setting.entity';

@Injectable()
export class SettingRepository extends BaseRepository<SettingEntity, FilterableFieldsType<SettingEntity>> {
  constructor(
    @Inject(SettingEntity.name) private readonly _settingModel: Model<SettingEntity>,
  ) {
    super(_settingModel, SettingRepository.name);
  }
}
