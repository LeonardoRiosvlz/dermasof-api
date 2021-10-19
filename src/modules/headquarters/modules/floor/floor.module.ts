import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FloorFeature } from './entities/floor.entity';
import { FloorRepository } from './repositories/floor.repository';
import { FloorCommandHandlers } from './cqrs/commands';

import { FloorMapper } from './mapper/floor.mapper';
import { FloorResolver } from './graphql/resolvers/floor.resolver';
import { FloorQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FloorEntityService } from './services/floor-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FloorFeature]),

    FloorMapper,
    FloorResolver,
    FloorRepository,
    FloorEntityService,
    FloorResolver,
    ...FloorCommandHandlers,
    ...FloorQueryHandlers,
  ],
  exports:[FloorMapper, FloorRepository, FloorEntityService]

})
export class FloorModule {

}
