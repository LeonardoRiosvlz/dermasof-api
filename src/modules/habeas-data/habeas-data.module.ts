import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { HabeasDataFeature } from './entities/habeas-data.entity';
import { HabeasDataRepository } from './repositories/habeas-data.repository';
import { HabeasDataCommandHandlers } from './cqrs/commands';

import { HabeasDataMapper } from './mapper/habeas-data.mapper';
import { HabeasDataResolver } from './graphql/resolvers/habeas-data.resolver';
import { HabeasDataQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { HabeasDataEntityService } from './services/habeas-data-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([HabeasDataFeature]),

    HabeasDataMapper,
    HabeasDataResolver,
    HabeasDataRepository,
    HabeasDataEntityService,
    HabeasDataResolver,
    ...HabeasDataCommandHandlers,
    ...HabeasDataQueryHandlers,
  ],
  exports: [
    HabeasDataRepository,
    HabeasDataEntityService,
    HabeasDataMapper
  ]

})
export class HabeasDataModule {

}
