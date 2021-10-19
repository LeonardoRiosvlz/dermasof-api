import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPatientSafetyCheckQuery extends GetPaginatedQuery<PatientSafetyCheckEntity>{
  constructor(public request: GetPaginatedDto<PatientSafetyCheckEntity>) {
    super(request)
  }
}
