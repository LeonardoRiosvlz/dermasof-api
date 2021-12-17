import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPhotographicReportQuery } from '../impl/get-paginated-photographic-report.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@QueryHandler(GetPaginatedPhotographicReportQuery)
export class GetPaginatedPhotographicReportQueryHandler extends GetPaginatedQueryHandler<PhotographicReportEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PhotographicReportEntityService.name)
  }

}
