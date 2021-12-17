import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { RegionEntity } from '../entities/region.entity';
import { RegionRepository } from '../repositories/region.repository';


@Injectable()
export class RegionEntityService extends BaseEntityService<RegionEntity> {
  constructor(private readonly _regionRepo: RegionRepository) {
    super(_regionRepo, RegionEntity.name);
  }




}
