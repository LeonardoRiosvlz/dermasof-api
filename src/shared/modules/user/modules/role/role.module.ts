import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { RoleFeature } from './entities/role.entity';
import { RoleRepository } from './repositories/role.repository';
import { RoleCommandHandlers } from './cqrs/commands';

import { RoleMapper } from './mapper/role.mapper';
import { RoleResolver } from './graphql/resolvers/role.resolver';
import { RoleQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { RoleEntityService } from './services/role-entity.service';
import { PermitsFeature } from './entities/schema/permits.schema';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([RoleFeature, PermitsFeature]),

    RoleMapper,
    RoleResolver,
    RoleRepository,
    RoleEntityService,
    RoleResolver,
    ...RoleCommandHandlers,
    ...RoleQueryHandlers,
  ],

  exports: [RoleMapper, RoleEntityService]

})
export class RoleModule {

}
