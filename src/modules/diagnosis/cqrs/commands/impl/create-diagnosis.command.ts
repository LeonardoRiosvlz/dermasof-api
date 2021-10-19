import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';

export class CreateDiagnosisCommand extends CreateCommand<DiagnosisEntity> {
  constructor(public request: DiagnosisEntity) {
    super(request);
  }
}
