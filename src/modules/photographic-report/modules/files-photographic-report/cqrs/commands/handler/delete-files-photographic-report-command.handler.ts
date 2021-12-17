import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesPhotographicReportCommand } from '../impl/delete-files-photographic-report.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@CommandHandler(DeleteFilesPhotographicReportCommand)
export class DeleteFilesPhotographicReportCommandHandler extends DeleteCommandHandler<FilesPhotographicReportEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesPhotographicReportEntityService.name)
  }
}
