import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PatientsEntity } from '../../../entities/patients.entity';

export class CreatePatientsCommand extends CreateCommand<PatientsEntity> {
  constructor(public request: PatientsEntity) {
    super(request);
  }
}
