import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedClinicHistoryProcedureQuery extends GetPaginatedQuery<ClinicHistoryProcedureEntity>{
  constructor(public request: GetPaginatedDto<ClinicHistoryProcedureEntity>) {
    super(request)
  }
}
