import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ServiceEntity } from '../entities/service.entity';

@Injectable()
export class ServiceRepository extends BaseRepository<ServiceEntity, FilterableFieldsType<ServiceEntity>> {
  constructor(
    @Inject(ServiceEntity.name) private readonly _serviceModel: Model<ServiceEntity>,
  ) {
    super(_serviceModel, ServiceRepository.name);
  }
}
