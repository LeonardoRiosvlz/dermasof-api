import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePhotographicReportQuery } from '../impl/get-one-photographic-report.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@QueryHandler(GetOnePhotographicReportQuery)
export class GetOnePhotographicReportQueryHandler extends GetOneQueryHandler<PhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PhotographicReportEntityService.name)
  }
}

