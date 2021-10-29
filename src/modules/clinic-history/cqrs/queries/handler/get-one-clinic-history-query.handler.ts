import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClinicHistoryQuery } from '../impl/get-one-clinic-history.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@QueryHandler(GetOneClinicHistoryQuery)
export class GetOneClinicHistoryQueryHandler extends GetOneQueryHandler<ClinicHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryEntityService.name)
  }
}

