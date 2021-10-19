import { forwardRef, Inject, Module } from '@nestjs/common';

import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FixtureService } from './services/fixture.service';
import { TenantModule } from '../tenant/tenant.module';
import { FixturesCommandHandlers } from './cqrs/commands';


@Module({
  imports: [
    AppConfigModule,
    DataAccessModule,
    TenantModule,
  ],
  providers: [
    FixtureService,
    ...FixturesCommandHandlers
  ],
  exports: [FixtureService],

})
export class FixturesModule {


}
