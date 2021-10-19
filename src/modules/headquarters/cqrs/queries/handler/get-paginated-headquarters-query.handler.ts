import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedHeadquartersQuery } from '../impl/get-paginated-headquarters.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@QueryHandler(GetPaginatedHeadquartersQuery)
export class GetPaginatedHeadquartersQueryHandler extends GetPaginatedQueryHandler<HeadquartersEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HeadquartersEntityService.name)
  }

}
