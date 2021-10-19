import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneUserAreaQuery } from '../impl/get-one-user-area.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@QueryHandler(GetOneUserAreaQuery)
export class GetOneUserAreaQueryHandler extends GetOneQueryHandler<UserAreaEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserAreaEntityService.name)
  }
}

