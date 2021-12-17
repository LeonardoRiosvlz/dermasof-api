import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPhotographicReportQuery } from '../impl/get-all-photographic-report.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@QueryHandler(GetAllPhotographicReportQuery)
export class GetAllPhotographicReportQueryHandler extends GetAllQueryHandler<PhotographicReportEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PhotographicReportEntityService.name)
  }

}
