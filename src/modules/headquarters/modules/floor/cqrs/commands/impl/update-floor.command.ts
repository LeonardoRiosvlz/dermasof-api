import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FloorEntity } from '../../../entities/floor.entity';

export class UpdateFloorCommand extends UpdateCommand<FloorEntity> {
  constructor(public entityId: string, update: Partial<FloorEntity>) {
    super({entityId, update});
  }
}
