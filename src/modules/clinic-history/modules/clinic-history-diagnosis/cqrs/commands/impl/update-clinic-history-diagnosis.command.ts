import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';

export class UpdateClinicHistoryDiagnosisCommand extends UpdateCommand<ClinicHistoryDiagnosisEntity> {
  constructor(public entityId: string, update: Partial<ClinicHistoryDiagnosisEntity>) {
    super({entityId, update});
  }
}
