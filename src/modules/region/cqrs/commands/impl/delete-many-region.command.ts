import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { RegionEntity } from '../../../entities/region.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyRegionCommand extends DeleteManyCommand<RegionEntity>{
  constructor(public request: GetOneDto<RegionEntity>) {
    super(request)
  }
}
