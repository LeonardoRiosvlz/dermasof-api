import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClinicHistoryProcedureQuery extends GetOneQuery<ClinicHistoryProcedureEntity>{
  constructor(public request: GetOneDto<ClinicHistoryProcedureEntity>) {
    super(request)
  }
}
