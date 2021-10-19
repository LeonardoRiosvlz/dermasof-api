import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { InformedConsentFeature } from './entities/informed-consent.entity';
import { InformedConsentRepository } from './repositories/informed-consent.repository';
import { InformedConsentCommandHandlers } from './cqrs/commands';

import { InformedConsentMapper } from './mapper/informed-consent.mapper';
import { InformedConsentResolver } from './graphql/resolvers/informed-consent.resolver';
import { InformedConsentQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { InformedConsentEntityService } from './services/informed-consent-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([InformedConsentFeature]),

    InformedConsentMapper,
    InformedConsentResolver,
    InformedConsentRepository,
    InformedConsentEntityService,
    InformedConsentResolver,
    ...InformedConsentCommandHandlers,
    ...InformedConsentQueryHandlers,
  ],
  exports: [
    InformedConsentRepository,
    InformedConsentEntityService,
    InformedConsentMapper
  ]

})
export class InformedConsentModule {

}
