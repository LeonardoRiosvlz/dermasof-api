import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';

export class UpdatePatientSafetyCheckCommand extends UpdateCommand<PatientSafetyCheckEntity> {
  constructor(public entityId: string, update: Partial<PatientSafetyCheckEntity>) {
    super({entityId, update});
  }
}
