import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPatientDataSettingsQuery extends GetAllQuery<PatientDataSettingsEntity>{
  constructor(public request: GetAllDto<PatientDataSettingsEntity>) {
    super(request)
  }
}
