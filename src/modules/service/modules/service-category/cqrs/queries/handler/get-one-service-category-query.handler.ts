import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneServiceCategoryQuery } from '../impl/get-one-service-category.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { ServiceCategoryEntityService } from '../../../services/service-category-entity.service';

@QueryHandler(GetOneServiceCategoryQuery)
export class GetOneServiceCategoryQueryHandler extends GetOneQueryHandler<ServiceCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceCategoryEntityService.name)
  }
}

