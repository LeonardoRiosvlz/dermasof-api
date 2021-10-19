import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllHeadquartersQuery } from '../impl/get-all-headquarters.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@QueryHandler(GetAllHeadquartersQuery)
export class GetAllHeadquartersQueryHandler extends GetAllQueryHandler<HeadquartersEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HeadquartersEntityService.name)
  }

}
