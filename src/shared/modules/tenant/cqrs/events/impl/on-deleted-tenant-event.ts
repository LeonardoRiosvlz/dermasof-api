import { AppEvent } from 'src/shared/modules/app-cqrs/base/AppEvent';
import { TenantEntity } from '../../../entities/tenant.entity';

export class OnDeletedTenantEvent extends AppEvent {
  constructor(public readonly request: TenantEntity) {
    super();
  }
}