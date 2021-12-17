import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { RegionEntity } from '../../../entities/region.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedRegionQuery extends GetPaginatedQuery<RegionEntity>{
  constructor(public request: GetPaginatedDto<RegionEntity>) {
    super(request)
  }
}
