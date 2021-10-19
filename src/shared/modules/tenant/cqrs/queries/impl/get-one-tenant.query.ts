import { GetOneDto } from '../../../../../dto/get-one.dto';
import { TenantEntity } from '../../../entities/tenant.entity';
import { GetOneQuery } from '../../../../app-cqrs/queries/impl/get-one.query';

export class GetOneTenantQuery extends GetOneQuery<TenantEntity> {
  constructor(public request: GetOneDto<TenantEntity>) {
    super(request)
  }
}
