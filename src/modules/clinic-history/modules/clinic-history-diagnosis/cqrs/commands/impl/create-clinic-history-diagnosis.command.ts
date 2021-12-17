import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';

export class CreateClinicHistoryDiagnosisCommand extends CreateCommand<ClinicHistoryDiagnosisEntity> {
  constructor(public request: ClinicHistoryDiagnosisEntity) {
    super(request);
  }
}
