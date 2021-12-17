import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesPhotographicReportQuery } from '../impl/get-one-files-photographic-report.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@QueryHandler(GetOneFilesPhotographicReportQuery)
export class GetOneFilesPhotographicReportQueryHandler extends GetOneQueryHandler<FilesPhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesPhotographicReportEntityService.name)
  }
}

