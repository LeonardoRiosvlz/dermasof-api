import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../repositories/service.repository';


@Injectable()
export class ServiceEntityService extends BaseEntityService<ServiceEntity> {
  constructor(private readonly _serviceRepo: ServiceRepository) {
    super(_serviceRepo, ServiceEntity.name);
  }




}
