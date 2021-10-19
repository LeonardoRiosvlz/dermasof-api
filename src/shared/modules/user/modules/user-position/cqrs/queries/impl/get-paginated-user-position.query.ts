import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedUserPositionQuery extends GetPaginatedQuery<UserPositionEntity>{
  constructor(public request: GetPaginatedDto<UserPositionEntity>) {
    super(request)
  }
}
