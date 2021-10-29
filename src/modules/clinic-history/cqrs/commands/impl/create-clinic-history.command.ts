import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';

export class CreateClinicHistoryCommand extends CreateCommand<ClinicHistoryEntity> {
  constructor(public request: ClinicHistoryEntity) {
    super(request);
  }
}
