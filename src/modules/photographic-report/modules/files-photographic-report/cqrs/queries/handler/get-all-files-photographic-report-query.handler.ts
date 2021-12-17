import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesPhotographicReportQuery } from '../impl/get-all-files-photographic-report.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@QueryHandler(GetAllFilesPhotographicReportQuery)
export class GetAllFilesPhotographicReportQueryHandler extends GetAllQueryHandler<FilesPhotographicReportEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesPhotographicReportEntityService.name)
  }

}
