import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';

export class CreateLaboratoryExamsCommand extends CreateCommand<LaboratoryExamsEntity> {
  constructor(public request: LaboratoryExamsEntity) {
    super(request);
  }
}
