import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { UserPositionEntity } from '../entities/user-position.entity';

@Injectable()
export class UserPositionRepository extends BaseRepository<UserPositionEntity, FilterableFieldsType<UserPositionEntity>> {
  constructor(
    @Inject(UserPositionEntity.name) private readonly _userPositionModel: Model<UserPositionEntity>,
  ) {
    super(_userPositionModel, UserPositionRepository.name);
  }
}
