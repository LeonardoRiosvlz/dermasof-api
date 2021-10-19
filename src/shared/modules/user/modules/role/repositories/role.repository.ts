import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleRepository extends BaseRepository<RoleEntity, FilterableFieldsType<RoleEntity>> {
  constructor(
    @Inject(RoleEntity.name) private readonly _roleModel: Model<RoleEntity>,
  ) {
    super(_roleModel, RoleRepository.name);
  }
}
