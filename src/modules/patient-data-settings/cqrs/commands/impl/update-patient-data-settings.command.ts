import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';

export class UpdatePatientDataSettingsCommand extends UpdateCommand<PatientDataSettingsEntity> {
  constructor(public entityId: string, update: Partial<PatientDataSettingsEntity>) {
    super({entityId, update});
  }
}
