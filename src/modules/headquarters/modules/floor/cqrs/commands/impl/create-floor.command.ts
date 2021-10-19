import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FloorEntity } from '../../../entities/floor.entity';

export class CreateFloorCommand extends CreateCommand<FloorEntity> {
  constructor(public request: FloorEntity) {
    super(request);
  }
}
