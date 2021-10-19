import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';

export class CreatePatientDataSettingsCommand extends CreateCommand<PatientDataSettingsEntity> {
  constructor(public request: PatientDataSettingsEntity) {
    super(request);
  }
}
