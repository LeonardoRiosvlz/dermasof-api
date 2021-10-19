import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';

export class CreatePatientSafetyCheckCommand extends CreateCommand<PatientSafetyCheckEntity> {
  constructor(public request: PatientSafetyCheckEntity) {
    super(request);
  }
}
