import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClinicHistoryProcedureCommand extends DeleteManyCommand<ClinicHistoryProcedureEntity>{
  constructor(public request: GetOneDto<ClinicHistoryProcedureEntity>) {
    super(request)
  }
}
