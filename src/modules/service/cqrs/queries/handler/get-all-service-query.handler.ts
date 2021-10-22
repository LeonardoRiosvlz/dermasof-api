import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllServiceQuery } from '../impl/get-all-service.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@QueryHandler(GetAllServiceQuery)
export class GetAllServiceQueryHandler extends GetAllQueryHandler<ServiceEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceEntityService.name)
  }

}
