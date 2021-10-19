import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedLaboratoryExamsQuery extends GetPaginatedQuery<LaboratoryExamsEntity>{
  constructor(public request: GetPaginatedDto<LaboratoryExamsEntity>) {
    super(request)
  }
}
