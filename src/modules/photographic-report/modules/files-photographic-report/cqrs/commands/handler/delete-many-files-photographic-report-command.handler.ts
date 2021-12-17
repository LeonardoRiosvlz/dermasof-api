import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesPhotographicReportCommand } from '../impl/delete-many-files-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { FilesPhotographicReportEntityService } from '../../../services/files-photographic-report-entity.service';

@CommandHandler(DeleteManyFilesPhotographicReportCommand)
export class DeleteManyFilesPhotographicReportCommandHandler extends DeleteManyCommandHandler<FilesPhotographicReportEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesPhotographicReportEntityService.name)
  }

}
