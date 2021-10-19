import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PathologiesEntity } from '../../../entities/pathologies.entity';

export class UpdatePathologiesCommand extends UpdateCommand<PathologiesEntity> {
  constructor(public entityId: string, update: Partial<PathologiesEntity>) {
    super({entityId, update});
  }
}
