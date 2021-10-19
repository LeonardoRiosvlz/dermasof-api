import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FloorEntity } from '../../../entities/floor.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFloorQuery extends GetPaginatedQuery<FloorEntity>{
  constructor(public request: GetPaginatedDto<FloorEntity>) {
    super(request)
  }
}
