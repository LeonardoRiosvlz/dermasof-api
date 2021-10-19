import { TenantEntity } from '../../../entities/tenant.entity';
import { CreateCommand } from '../../../../app-cqrs/commands/impl/create.command';

export class CreateTenantCommand extends CreateCommand<TenantEntity> {
  constructor(public request: TenantEntity) {
    super(request);
  }
}
