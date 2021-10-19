import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from '../../data-access/mongoose/base.respository';
import { UserEntity } from '../entities/user.entity';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { OrderByType } from '../../../core/interfaces/IOrderByType';
import { IncludesType } from '../../../core/interfaces/IRepository';
import { IPaginatorParams } from '../../../core/interfaces/IPaginatorParams';
import { IPaginatedData } from '../../../core/interfaces/IPaginatedData';
import { Result } from '../../../core/class/result';



@Injectable()
export class UserRepository extends BaseRepository<UserEntity, FilterableFieldsType<UserEntity> > {
  constructor(
    @Inject(UserEntity.name) private _entityRepo: Model<UserEntity>,
  ) {
    super(_entityRepo, UserRepository.name );
  }

}
