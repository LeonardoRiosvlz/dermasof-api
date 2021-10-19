import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';
import { UserEntity } from '../../../entities/user.entity';
import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';

export class GetPaginatedUsersQuery extends GetPaginatedQuery<UserEntity> {
  constructor(public request: GetPaginatedDto<UserEntity>) {
    super(request);
  }
}
