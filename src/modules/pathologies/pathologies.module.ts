import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PathologiesFeature } from './entities/pathologies.entity';
import { PathologiesRepository } from './repositories/pathologies.repository';
import { PathologiesCommandHandlers } from './cqrs/commands';

import { PathologiesMapper } from './mapper/pathologies.mapper';
import { PathologiesResolver } from './graphql/resolvers/pathologies.resolver';
import { PathologiesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PathologiesEntityService } from './services/pathologies-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PathologiesFeature]),

    PathologiesMapper,
    PathologiesResolver,
    PathologiesRepository,
    PathologiesEntityService,
    PathologiesResolver,
    ...PathologiesCommandHandlers,
    ...PathologiesQueryHandlers,
  ],
  exports: [
    PathologiesRepository,
    PathologiesEntityService,
    PathologiesMapper
  ]

})
export class PathologiesModule {

}
