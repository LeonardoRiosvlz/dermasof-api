import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { UserPositionFeature } from './entities/user-position.entity';
import { UserPositionRepository } from './repositories/user-position.repository';
import { UserPositionCommandHandlers } from './cqrs/commands';

import { UserPositionMapper } from './mapper/user-position.mapper';
import { UserPositionResolver } from './graphql/resolvers/user-position.resolver';
import { UserPositionQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { UserPositionService } from './services/user-position.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([UserPositionFeature]),

    UserPositionMapper,
    UserPositionResolver,
    UserPositionRepository,
    UserPositionService,
    UserPositionResolver,
    ...UserPositionCommandHandlers,
    ...UserPositionQueryHandlers,
  ],

})
export class UserPositionModule {

}
