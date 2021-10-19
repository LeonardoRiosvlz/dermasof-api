import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDiagnosisTypeQuery extends GetPaginatedQuery<DiagnosisTypeEntity>{
  constructor(public request: GetPaginatedDto<DiagnosisTypeEntity>) {
    super(request)
  }
}
