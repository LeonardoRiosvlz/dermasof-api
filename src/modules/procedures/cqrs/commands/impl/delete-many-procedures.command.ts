import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ProceduresEntity } from '../../../entities/procedures.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyProceduresCommand extends DeleteManyCommand<ProceduresEntity>{
  constructor(public request: GetOneDto<ProceduresEntity>) {
    super(request)
  }
}
