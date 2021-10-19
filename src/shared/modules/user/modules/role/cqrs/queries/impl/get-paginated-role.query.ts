import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { RoleEntity } from '../../../entities/role.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedRoleQuery extends GetPaginatedQuery<RoleEntity>{
  constructor(public request: GetPaginatedDto<RoleEntity>) {
    super(request)
  }
}
