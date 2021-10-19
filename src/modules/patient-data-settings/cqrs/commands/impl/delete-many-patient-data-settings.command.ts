import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPatientDataSettingsCommand extends DeleteManyCommand<PatientDataSettingsEntity>{
  constructor(public request: GetOneDto<PatientDataSettingsEntity>) {
    super(request)
  }
}
