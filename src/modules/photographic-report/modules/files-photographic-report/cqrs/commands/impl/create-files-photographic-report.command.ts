import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';

export class CreateFilesPhotographicReportCommand extends CreateCommand<FilesPhotographicReportEntity> {
  constructor(public request: FilesPhotographicReportEntity) {
    super(request);
  }
}
