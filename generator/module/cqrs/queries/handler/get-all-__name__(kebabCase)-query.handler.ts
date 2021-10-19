import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAll__name__Query } from '../impl/get-all-__name__(kebabCase).query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';

@QueryHandler(GetAll__name__Query)
export class GetAll__name__QueryHandler extends GetAllQueryHandler<__name__Entity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, __name__EntityService.name)
  }

}
