import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllOfficeQuery } from '../impl/get-all-office.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@QueryHandler(GetAllOfficeQuery)
export class GetAllOfficeQueryHandler extends GetAllQueryHandler<OfficeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, OfficeEntityService.name)
  }

}
