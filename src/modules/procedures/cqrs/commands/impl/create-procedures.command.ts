import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ProceduresEntity } from '../../../entities/procedures.entity';

export class CreateProceduresCommand extends CreateCommand<ProceduresEntity> {
  constructor(public request: ProceduresEntity) {
    super(request);
  }
}
