import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllUserAreaQuery } from '../impl/get-all-user-area.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { UserAreaEntityService } from '../../../services/user-area-entity.service';

@QueryHandler(GetAllUserAreaQuery)
export class GetAllUserAreaQueryHandler extends GetAllQueryHandler<UserAreaEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, UserAreaEntityService.name)
  }

}
