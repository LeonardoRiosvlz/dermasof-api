import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';

export class UpdateDiagnosisTypeCommand extends UpdateCommand<DiagnosisTypeEntity> {
  constructor(public entityId: string, update: Partial<DiagnosisTypeEntity>) {
    super({entityId, update});
  }
}
