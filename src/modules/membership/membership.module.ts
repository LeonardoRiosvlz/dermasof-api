import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { MembershipFeature } from './entities/membership.entity';
import { MembershipRepository } from './repositories/membership.repository';
import { MembershipCommandHandlers } from './cqrs/commands';

import { MembershipMapper } from './mapper/membership.mapper';
import { MembershipResolver } from './graphql/resolvers/membership.resolver';
import { MembershipQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { MembershipEntityService } from './services/membership-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([MembershipFeature]),

    MembershipMapper,
    MembershipResolver,
    MembershipRepository,
    MembershipEntityService,
    MembershipResolver,
    ...MembershipCommandHandlers,
    ...MembershipQueryHandlers,
  ],
  exports: [
    MembershipRepository,
    MembershipEntityService,
    MembershipMapper
  ]

})
export class MembershipModule {

}
