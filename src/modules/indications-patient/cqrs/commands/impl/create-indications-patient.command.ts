import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';

export class CreateIndicationsPatientCommand extends CreateCommand<IndicationsPatientEntity> {
  constructor(public request: IndicationsPatientEntity) {
    super(request);
  }
}
