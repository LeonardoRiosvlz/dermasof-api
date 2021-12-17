import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPhotographicReportQuery extends GetAllQuery<PhotographicReportEntity>{
  constructor(public request: GetAllDto<PhotographicReportEntity>) {
    super(request)
  }
}
