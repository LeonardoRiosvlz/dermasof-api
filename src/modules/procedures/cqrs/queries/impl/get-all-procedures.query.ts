import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllProceduresQuery extends GetAllQuery<ProceduresEntity>{
  constructor(public request: GetAllDto<ProceduresEntity>) {
    super(request)
  }
}
