import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PatientsEntity } from '../../../entities/patients.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPatientsQuery extends GetPaginatedQuery<PatientsEntity>{
  constructor(public request: GetPaginatedDto<PatientsEntity>) {
    super(request)
  }
}
