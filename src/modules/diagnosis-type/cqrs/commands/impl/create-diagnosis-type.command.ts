import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';

export class CreateDiagnosisTypeCommand extends CreateCommand<DiagnosisTypeEntity> {
  constructor(public request: DiagnosisTypeEntity) {
    super(request);
  }
}
