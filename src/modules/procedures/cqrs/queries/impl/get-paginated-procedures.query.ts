import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedProceduresQuery extends GetPaginatedQuery<ProceduresEntity>{
  constructor(public request: GetPaginatedDto<ProceduresEntity>) {
    super(request)
  }
}
