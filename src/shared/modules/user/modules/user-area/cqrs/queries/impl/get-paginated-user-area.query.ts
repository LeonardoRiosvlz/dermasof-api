import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedUserAreaQuery extends GetPaginatedQuery<UserAreaEntity>{
  constructor(public request: GetPaginatedDto<UserAreaEntity>) {
    super(request)
  }
}
