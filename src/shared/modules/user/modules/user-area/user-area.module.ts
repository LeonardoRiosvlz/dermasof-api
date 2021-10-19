import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { UserAreaFeature } from './entities/user-area.entity';
import { UserAreaRepository } from './repositories/user-area.repository';
import { UserAreaCommandHandlers } from './cqrs/commands';

import { UserAreaMapper } from './mapper/user-area.mapper';
import { UserAreaResolver } from './graphql/resolvers/user-area.resolver';
import { UserAreaQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { UserAreaEntityService } from './services/user-area-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([UserAreaFeature]),

    UserAreaMapper,
    UserAreaResolver,
    UserAreaRepository,
    UserAreaEntityService,
    UserAreaResolver,
    ...UserAreaCommandHandlers,
    ...UserAreaQueryHandlers,
  ],

})
export class UserAreaModule {

}
