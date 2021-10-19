import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';

export class UpdateDiagnosisCommand extends UpdateCommand<DiagnosisEntity> {
  constructor(public entityId: string, update: Partial<DiagnosisEntity>) {
    super({entityId, update});
  }
}
