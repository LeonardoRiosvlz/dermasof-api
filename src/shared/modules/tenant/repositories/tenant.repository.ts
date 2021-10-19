import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from '../../data-access/mongoose/base.respository';
import { TenantEntity } from '../entities/tenant.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';


@Injectable()
export class TenantRepository extends BaseRepository<TenantEntity, FilterableFieldsType<TenantEntity> > {
  constructor(
    @InjectModel(TenantEntity.name) private readonly _tenantModel: Model<TenantEntity>,
  ) {
    super(_tenantModel, TenantRepository.name);
  }
}
