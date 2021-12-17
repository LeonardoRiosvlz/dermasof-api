import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClinicHistoryDiagnosisQuery extends GetPaginatedQuery<ClinicHistoryDiagnosisEntity>{
  constructor(public request: GetPaginatedDto<ClinicHistoryDiagnosisEntity>) {
    super(request)
  }
}
