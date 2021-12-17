import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesPhotographicReportQuery extends GetOneQuery<FilesPhotographicReportEntity>{
  constructor(public request: GetOneDto<FilesPhotographicReportEntity>) {
    super(request)
  }
}
