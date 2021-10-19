import { TenantEntity } from '../../../entities/tenant.entity';
import { UpdateCommand } from '../../../../app-cqrs/commands/impl/update.command';

export class UpdateTenantCommand extends UpdateCommand<TenantEntity> {
  constructor(public request: {entityId: string, update:Partial<TenantEntity>}) {
    super({entityId: request.entityId , update:request.update});
  }
}
