import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';

export class UpdateClinicalHistoryIndicationsCommand extends UpdateCommand<ClinicalHistoryIndicationsEntity> {
  constructor(public entityId: string, update: Partial<ClinicalHistoryIndicationsEntity>) {
    super({entityId, update});
  }
}
