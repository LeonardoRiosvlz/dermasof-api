import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneHeadquartersQuery } from '../impl/get-one-headquarters.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@QueryHandler(GetOneHeadquartersQuery)
export class GetOneHeadquartersQueryHandler extends GetOneQueryHandler<HeadquartersEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, HeadquartersEntityService.name)
  }
}

