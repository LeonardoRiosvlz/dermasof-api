import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { OfficeFeature } from './entities/office.entity';
import { OfficeRepository } from './repositories/office.repository';
import { OfficeCommandHandlers } from './cqrs/commands';

import { OfficeMapper } from './mapper/office.mapper';
import { OfficeResolver } from './graphql/resolvers/office.resolver';
import { OfficeQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { OfficeEntityService } from './services/office-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([OfficeFeature]),

    OfficeMapper,
    OfficeResolver,
    OfficeRepository,
    OfficeEntityService,
    OfficeResolver,
    ...OfficeCommandHandlers,
    ...OfficeQueryHandlers,
  ],
  exports: [OfficeEntityService, OfficeRepository, OfficeMapper],

})
export class OfficeModule {

}
