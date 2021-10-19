import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProceduresEntity } from '../../../entities/procedures.entity';

export class UpdateProceduresCommand extends UpdateCommand<ProceduresEntity> {
  constructor(public entityId: string, update: Partial<ProceduresEntity>) {
    super({entityId, update});
  }
}
