import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';

export class UpdateIndicationsPatientCommand extends UpdateCommand<IndicationsPatientEntity> {
  constructor(public entityId: string, update: Partial<IndicationsPatientEntity>) {
    super({entityId, update});
  }
}
