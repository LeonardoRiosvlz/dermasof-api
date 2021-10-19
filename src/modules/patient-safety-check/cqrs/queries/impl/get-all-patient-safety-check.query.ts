import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPatientSafetyCheckQuery extends GetAllQuery<PatientSafetyCheckEntity>{
  constructor(public request: GetAllDto<PatientSafetyCheckEntity>) {
    super(request)
  }
}
