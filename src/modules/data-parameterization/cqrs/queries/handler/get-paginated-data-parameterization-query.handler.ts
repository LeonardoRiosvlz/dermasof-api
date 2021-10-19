import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDataParameterizationQuery } from '../impl/get-paginated-data-parameterization.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@QueryHandler(GetPaginatedDataParameterizationQuery)
export class GetPaginatedDataParameterizationQueryHandler extends GetPaginatedQueryHandler<DataParameterizationEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DataParameterizationEntityService.name)
  }

}
