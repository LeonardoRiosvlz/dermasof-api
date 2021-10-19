import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';

export class UpdateLaboratoryExamsCommand extends UpdateCommand<LaboratoryExamsEntity> {
  constructor(public entityId: string, update: Partial<LaboratoryExamsEntity>) {
    super({entityId, update});
  }
}
