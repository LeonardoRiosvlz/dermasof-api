import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { RegionEntity } from '../../../entities/region.entity';

export class CreateRegionCommand extends CreateCommand<RegionEntity> {
  constructor(public request: RegionEntity) {
    super(request);
  }
}
