import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { VitalSignsEntity } from '../entities/vital-signs.entity';
import { VitalSignsRepository } from '../repositories/vital-signs.repository';


@Injectable()
export class VitalSignsEntityService extends BaseEntityService<VitalSignsEntity> {
  constructor(private readonly _vitalSignsRepo: VitalSignsRepository) {
    super(_vitalSignsRepo, VitalSignsEntity.name);
  }




}
