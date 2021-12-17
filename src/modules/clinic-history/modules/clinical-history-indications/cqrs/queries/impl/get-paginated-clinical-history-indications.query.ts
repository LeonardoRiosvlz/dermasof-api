import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClinicalHistoryIndicationsQuery extends GetPaginatedQuery<ClinicalHistoryIndicationsEntity>{
  constructor(public request: GetPaginatedDto<ClinicalHistoryIndicationsEntity>) {
    super(request)
  }
}
