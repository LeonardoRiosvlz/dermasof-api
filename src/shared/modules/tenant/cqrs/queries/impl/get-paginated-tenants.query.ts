import { TenantEntity } from '../../../entities/tenant.entity';
import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { GetPaginatedDto } from '../../../../../dto/get-paginated.dto';
import { GetPaginatedQuery } from '../../../../app-cqrs/queries/impl/get-paginated.query';

export class GetPaginatedTenantsQuery extends GetPaginatedQuery<TenantEntity>{
  constructor(public request: GetPaginatedDto<TenantEntity>) {
    super(request)
  }
}
