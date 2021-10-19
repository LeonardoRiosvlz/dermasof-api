import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedOfficeQuery } from '../impl/get-paginated-office.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@QueryHandler(GetPaginatedOfficeQuery)
export class GetPaginatedOfficeQueryHandler extends GetPaginatedQueryHandler<OfficeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, OfficeEntityService.name)
  }

}
