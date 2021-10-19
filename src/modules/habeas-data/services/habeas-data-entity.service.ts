import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { HabeasDataEntity } from '../entities/habeas-data.entity';
import { HabeasDataRepository } from '../repositories/habeas-data.repository';


@Injectable()
export class HabeasDataEntityService extends BaseEntityService<HabeasDataEntity> {
  constructor(private readonly _habeasDataRepo: HabeasDataRepository) {
    super(_habeasDataRepo, HabeasDataEntity.name);
  }




}
