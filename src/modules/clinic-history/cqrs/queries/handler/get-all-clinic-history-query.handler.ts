import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClinicHistoryQuery } from '../impl/get-all-clinic-history.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@QueryHandler(GetAllClinicHistoryQuery)
export class GetAllClinicHistoryQueryHandler extends GetAllQueryHandler<ClinicHistoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryEntityService.name)
  }

}
