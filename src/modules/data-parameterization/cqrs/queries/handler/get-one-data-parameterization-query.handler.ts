import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDataParameterizationQuery } from '../impl/get-one-data-parameterization.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@QueryHandler(GetOneDataParameterizationQuery)
export class GetOneDataParameterizationQueryHandler extends GetOneQueryHandler<DataParameterizationEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DataParameterizationEntityService.name)
  }
}

