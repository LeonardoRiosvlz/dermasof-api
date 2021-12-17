import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';

export class CreateClinicalHistoryIndicationsCommand extends CreateCommand<ClinicalHistoryIndicationsEntity> {
  constructor(public request: ClinicalHistoryIndicationsEntity) {
    super(request);
  }
}
