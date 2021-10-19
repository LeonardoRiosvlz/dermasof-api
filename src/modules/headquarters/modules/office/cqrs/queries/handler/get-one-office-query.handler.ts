import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneOfficeQuery } from '../impl/get-one-office.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@QueryHandler(GetOneOfficeQuery)
export class GetOneOfficeQueryHandler extends GetOneQueryHandler<OfficeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, OfficeEntityService.name)
  }
}

