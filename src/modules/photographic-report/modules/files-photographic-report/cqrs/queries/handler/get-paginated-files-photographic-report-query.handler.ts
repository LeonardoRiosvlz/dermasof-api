import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesPhotographicReportQuery } from '../impl/get-paginated-files-photographic-report.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@QueryHandler(GetPaginatedFilesPhotographicReportQuery)
export class GetPaginatedFilesPhotographicReportQueryHandler extends GetPaginatedQueryHandler<FilesPhotographicReportEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesPhotographicReportEntityService.name)
  }

}
