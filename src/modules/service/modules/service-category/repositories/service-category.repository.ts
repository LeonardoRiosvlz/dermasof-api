import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ServiceCategoryEntity } from '../entities/service-category.entity';

@Injectable()
export class ServiceCategoryRepository extends BaseRepository<ServiceCategoryEntity, FilterableFieldsType<ServiceCategoryEntity>> {
  constructor(
    @Inject(ServiceCategoryEntity.name) private readonly _serviceCategoryModel: Model<ServiceCategoryEntity>,
  ) {
    super(_serviceCategoryModel, ServiceCategoryRepository.name);
  }
}
