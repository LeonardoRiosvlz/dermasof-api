import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClinicHistoryQuery extends GetPaginatedQuery<ClinicHistoryEntity>{
  constructor(public request: GetPaginatedDto<ClinicHistoryEntity>) {
    super(request)
  }
}
