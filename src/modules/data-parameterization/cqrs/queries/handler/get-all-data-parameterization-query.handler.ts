import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDataParameterizationQuery } from '../impl/get-all-data-parameterization.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@QueryHandler(GetAllDataParameterizationQuery)
export class GetAllDataParameterizationQueryHandler extends GetAllQueryHandler<DataParameterizationEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DataParameterizationEntityService.name)
  }

}
