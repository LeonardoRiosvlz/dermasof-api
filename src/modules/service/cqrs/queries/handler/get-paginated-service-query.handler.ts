import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedServiceQuery } from '../impl/get-paginated-service.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@QueryHandler(GetPaginatedServiceQuery)
export class GetPaginatedServiceQueryHandler extends GetPaginatedQueryHandler<ServiceEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceEntityService.name)
  }

}
