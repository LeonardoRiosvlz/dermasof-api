import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOne__name__Query } from '../impl/get-one-__name__(kebabCase).query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@QueryHandler(GetOne__name__Query)
export class GetOne__name__QueryHandler extends GetOneQueryHandler<__name__Entity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, __name__EntityService.name)
  }
}

