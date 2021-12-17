import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesPhotographicReportEntity } from '../../../entities/files-photographic-report.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesPhotographicReportQuery extends GetAllQuery<FilesPhotographicReportEntity>{
  constructor(public request: GetAllDto<FilesPhotographicReportEntity>) {
    super(request)
  }
}
