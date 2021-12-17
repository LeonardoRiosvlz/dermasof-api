import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClinicHistoryDiagnosisCommand extends DeleteManyCommand<ClinicHistoryDiagnosisEntity>{
  constructor(public request: GetOneDto<ClinicHistoryDiagnosisEntity>) {
    super(request)
  }
}
