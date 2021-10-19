import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginated__name__Query } from '../impl/get-paginated-__name__(kebabCase).query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@QueryHandler(GetPaginated__name__Query)
export class GetPaginated__name__QueryHandler extends GetPaginatedQueryHandler<__name__Entity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, __name__EntityService.name)
  }

}
