import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllServiceCategoryQuery } from '../impl/get-all-service-category.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@QueryHandler(GetAllServiceCategoryQuery)
export class GetAllServiceCategoryQueryHandler extends GetAllQueryHandler<ServiceCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceCategoryEntityService.name)
  }

}
