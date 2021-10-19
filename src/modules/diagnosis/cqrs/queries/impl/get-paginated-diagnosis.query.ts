import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDiagnosisQuery extends GetPaginatedQuery<DiagnosisEntity>{
  constructor(public request: GetPaginatedDto<DiagnosisEntity>) {
    super(request)
  }
}
