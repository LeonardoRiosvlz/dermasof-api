import { AppEvent } from 'src/shared/modules/app-cqrs/base/AppEvent';
import { TenantEntity } from '../../../entities/tenant.entity';

export class OnCreatedTenantEvent extends AppEvent {
  constructor(public readonly request: TenantEntity) {
    super();
  }
}