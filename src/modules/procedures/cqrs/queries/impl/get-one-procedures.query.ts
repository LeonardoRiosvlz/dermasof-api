import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneProceduresQuery extends GetOneQuery<ProceduresEntity>{
  constructor(public request: GetOneDto<ProceduresEntity>) {
    super(request)
  }
}
