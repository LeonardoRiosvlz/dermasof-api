import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';

export class CreateClinicHistoryProcedureCommand extends CreateCommand<ClinicHistoryProcedureEntity> {
  constructor(public request: ClinicHistoryProcedureEntity) {
    super(request);
  }
}
