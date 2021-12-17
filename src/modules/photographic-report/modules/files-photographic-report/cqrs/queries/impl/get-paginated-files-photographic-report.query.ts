import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesPhotographicReportQuery extends GetPaginatedQuery<FilesPhotographicReportEntity>{
  constructor(public request: GetPaginatedDto<FilesPhotographicReportEntity>) {
    super(request)
  }
}
