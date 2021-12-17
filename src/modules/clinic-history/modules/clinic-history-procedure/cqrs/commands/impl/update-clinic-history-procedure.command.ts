import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';

export class UpdateClinicHistoryProcedureCommand extends UpdateCommand<ClinicHistoryProcedureEntity> {
  constructor(public entityId: string, update: Partial<ClinicHistoryProcedureEntity>) {
    super({entityId, update});
  }
}
