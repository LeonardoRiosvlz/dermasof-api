import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { DataParameterizationEntity } from '../entities/data-parameterization.entity';
import { DataParameterizationRepository } from '../repositories/data-parameterization.repository';


@Injectable()
export class DataParameterizationEntityService extends BaseEntityService<DataParameterizationEntity> {
  constructor(private readonly _dataParameterizationRepo: DataParameterizationRepository) {
    super(_dataParameterizationRepo, DataParameterizationEntity.name);
  }




}
