import { TenantEntity } from '../../../entities/tenant.entity';
import { GetAllDto } from '../../../../../dto/get-all.dto';
import { GetAllQuery } from '../../../../app-cqrs/queries/impl/get-all.query';

export class GetAllTenantsQuery extends GetAllQuery<TenantEntity>{
  constructor(public request: GetAllDto<TenantEntity>) {
    super(request)
  }
}
