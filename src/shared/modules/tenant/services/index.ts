import { Provider } from '@nestjs/common';
import { TenantConnectionService, IAppTenantConnectionService } from './tenant.connection.service';
import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { TenantService } from './tenant.service';


export const tenantServicesProviders: Array<Provider> = [
  {
    provide: IAppTenantConnectionService.$,
    useClass: TenantConnectionService,
    inject:[AppConfigService]
  },
  TenantService
]