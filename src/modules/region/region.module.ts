import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { RegionFeature } from './entities/region.entity';
import { RegionRepository } from './repositories/region.repository';
import { RegionCommandHandlers } from './cqrs/commands';

import { RegionMapper } from './mapper/region.mapper';
import { RegionResolver } from './graphql/resolvers/region.resolver';
import { RegionQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { RegionEntityService } from './services/region-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([RegionFeature]),

    RegionMapper,
    RegionResolver,
    RegionRepository,
    RegionEntityService,
    RegionResolver,
    ...RegionCommandHandlers,
    ...RegionQueryHandlers,
  ],

})
export class RegionModule {

}
