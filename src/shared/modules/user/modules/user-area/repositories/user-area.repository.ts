import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { UserAreaEntity } from '../entities/user-area.entity';

@Injectable()
export class UserAreaRepository extends BaseRepository<UserAreaEntity, FilterableFieldsType<UserAreaEntity>> {
  constructor(
    @Inject(UserAreaEntity.name) private readonly _userAreaModel: Model<UserAreaEntity>,
  ) {
    super(_userAreaModel, UserAreaRepository.name);
  }
}
