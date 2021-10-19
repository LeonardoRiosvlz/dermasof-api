import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPatientSafetyCheckCommand extends DeleteManyCommand<PatientSafetyCheckEntity>{
  constructor(public request: GetOneDto<PatientSafetyCheckEntity>) {
    super(request)
  }
}
