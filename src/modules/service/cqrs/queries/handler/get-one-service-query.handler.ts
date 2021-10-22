import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneServiceQuery } from '../impl/get-one-service.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ServiceEntity } from '../../../entities/service.entity';
import { ServiceEntityService } from '../../../services/service-entity.service';

@QueryHandler(GetOneServiceQuery)
export class GetOneServiceQueryHandler extends GetOneQueryHandler<ServiceEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ServiceEntityService.name)
  }
}

