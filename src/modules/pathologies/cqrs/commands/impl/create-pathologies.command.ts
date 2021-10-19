import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PathologiesEntity } from '../../../entities/pathologies.entity';

export class CreatePathologiesCommand extends CreateCommand<PathologiesEntity> {
  constructor(public request: PathologiesEntity) {
    super(request);
  }
}
