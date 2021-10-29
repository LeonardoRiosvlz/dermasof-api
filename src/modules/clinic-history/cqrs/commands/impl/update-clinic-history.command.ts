import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';

export class UpdateClinicHistoryCommand extends UpdateCommand<ClinicHistoryEntity> {
  constructor(public entityId: string, update: Partial<ClinicHistoryEntity>) {
    super({entityId, update});
  }
}
