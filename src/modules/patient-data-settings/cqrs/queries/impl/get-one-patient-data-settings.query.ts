import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePatientDataSettingsQuery extends GetOneQuery<PatientDataSettingsEntity>{
  constructor(public request: GetOneDto<PatientDataSettingsEntity>) {
    super(request)
  }
}
