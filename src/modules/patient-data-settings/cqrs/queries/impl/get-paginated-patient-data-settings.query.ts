import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPatientDataSettingsQuery extends GetPaginatedQuery<PatientDataSettingsEntity>{
  constructor(public request: GetPaginatedDto<PatientDataSettingsEntity>) {
    super(request)
  }
}
