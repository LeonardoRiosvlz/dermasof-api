import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { RegionEntity } from '../../../entities/region.entity';

export class UpdateRegionCommand extends UpdateCommand<RegionEntity> {
  constructor(public entityId: string, update: Partial<RegionEntity>) {
    super({entityId, update});
  }
}
