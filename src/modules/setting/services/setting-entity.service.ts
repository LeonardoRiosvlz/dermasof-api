import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { SettingEntity } from '../entities/setting.entity';
import { SettingRepository } from '../repositories/setting.repository';


@Injectable()
export class SettingEntityService extends BaseEntityService<SettingEntity> {
  constructor(private readonly _settingRepo: SettingRepository) {
    super(_settingRepo, SettingEntity.name);
  }




}
