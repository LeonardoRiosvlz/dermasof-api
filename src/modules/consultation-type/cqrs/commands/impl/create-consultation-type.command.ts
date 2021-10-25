import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';

export class CreateConsultationTypeCommand extends CreateCommand<ConsultationTypeEntity> {
  constructor(public request: ConsultationTypeEntity) {
    super(request);
  }
}
