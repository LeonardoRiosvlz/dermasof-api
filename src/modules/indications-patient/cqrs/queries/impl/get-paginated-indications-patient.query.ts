import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedIndicationsPatientQuery extends GetPaginatedQuery<IndicationsPatientEntity>{
  constructor(public request: GetPaginatedDto<IndicationsPatientEntity>) {
    super(request)
  }
}
