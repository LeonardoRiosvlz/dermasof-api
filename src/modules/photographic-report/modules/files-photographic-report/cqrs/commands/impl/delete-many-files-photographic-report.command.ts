import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesPhotographicReportCommand extends DeleteManyCommand<FilesPhotographicReportEntity>{
  constructor(public request: GetOneDto<FilesPhotographicReportEntity>) {
    super(request)
  }
}
