import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPathologiesQuery } from '../impl/get-paginated-pathologies.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';

@QueryHandler(GetPaginatedPathologiesQuery)
export class GetPaginatedPathologiesQueryHandler extends GetPaginatedQueryHandler<PathologiesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PathologiesEntityService.name)
  }

}
