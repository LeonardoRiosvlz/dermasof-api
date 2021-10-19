import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PathologiesEntity } from '../entities/pathologies.entity';

@Injectable()
export class PathologiesRepository extends BaseRepository<PathologiesEntity, FilterableFieldsType<PathologiesEntity>> {
  constructor(
    @Inject(PathologiesEntity.name) private readonly _pathologiesModel: Model<PathologiesEntity>,
  ) {
    super(_pathologiesModel, PathologiesRepository.name);
  }
}
