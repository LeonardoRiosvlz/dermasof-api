import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesPhotographicReportCommand } from '../impl/create-files-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@CommandHandler(CreateFilesPhotographicReportCommand)
export class CreateFilesPhotographicReportCommandHandler extends CreateCommandHandler<FilesPhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesPhotographicReportEntityService.name);
  }

}
