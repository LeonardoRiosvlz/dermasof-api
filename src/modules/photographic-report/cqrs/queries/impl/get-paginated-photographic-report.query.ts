import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPhotographicReportQuery extends GetPaginatedQuery<PhotographicReportEntity>{
  constructor(public request: GetPaginatedDto<PhotographicReportEntity>) {
    super(request)
  }
}
