import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesPhotographicReportCommand } from '../impl/update-files-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';

@CommandHandler(UpdateFilesPhotographicReportCommand)
export class UpdateFilesPhotographicReportCommandHandler extends UpdateCommandHandler<FilesPhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesPhotographicReportEntityService.name)
  }

}
