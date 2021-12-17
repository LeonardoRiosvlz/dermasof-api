import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';

export class UpdateFilesPhotographicReportCommand extends UpdateCommand<FilesPhotographicReportEntity> {
  constructor(public entityId: string, update: Partial<FilesPhotographicReportEntity>) {
    super({entityId, update});
  }
}
