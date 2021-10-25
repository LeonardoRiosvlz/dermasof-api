import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';

export class UpdateConsultationTypeCommand extends UpdateCommand<ConsultationTypeEntity> {
  constructor(public entityId: string, update: Partial<ConsultationTypeEntity>) {
    super({entityId, update});
  }
}
