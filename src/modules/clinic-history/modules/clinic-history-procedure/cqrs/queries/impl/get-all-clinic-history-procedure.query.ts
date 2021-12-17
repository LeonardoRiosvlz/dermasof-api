import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClinicHistoryProcedureQuery extends GetAllQuery<ClinicHistoryProcedureEntity>{
  constructor(public request: GetAllDto<ClinicHistoryProcedureEntity>) {
    super(request)
  }
}
