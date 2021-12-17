import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePhotographicReportQuery extends GetOneQuery<PhotographicReportEntity>{
  constructor(public request: GetOneDto<PhotographicReportEntity>) {
    super(request)
  }
}
