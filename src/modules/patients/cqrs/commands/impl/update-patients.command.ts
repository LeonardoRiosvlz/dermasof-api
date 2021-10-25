import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PatientsEntity } from '../../../entities/patients.entity';

export class UpdatePatientsCommand extends UpdateCommand<PatientsEntity> {
  constructor(public entityId: string, update: Partial<PatientsEntity>) {
    super({entityId, update});
  }
}
