import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePatientSafetyCheckQuery extends GetOneQuery<PatientSafetyCheckEntity>{
  constructor(public request: GetOneDto<PatientSafetyCheckEntity>) {
    super(request)
  }
}
