import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedServiceCategoryQuery } from '../impl/get-paginated-service-category.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@QueryHandler(GetPaginatedServiceCategoryQuery)
export class GetPaginatedServiceCategoryQueryHandler extends GetPaginatedQueryHandler<ServiceCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceCategoryEntityService.name)
  }

}
