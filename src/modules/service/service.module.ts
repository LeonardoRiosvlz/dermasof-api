import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ServiceFeature } from './entities/service.entity';
import { ServiceRepository } from './repositories/service.repository';
import { ServiceCommandHandlers } from './cqrs/commands';

import { ServiceMapper } from './mapper/service.mapper';
import { ServiceResolver } from './graphql/resolvers/service.resolver';
import { ServiceQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ServiceEntityService } from './services/service-entity.service';
import { ServiceCategoryModule } from './modules/service-category/service-category.module';


@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
    ServiceCategoryModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ServiceFeature]),

    ServiceMapper,
    ServiceResolver,
    ServiceRepository,
    ServiceEntityService,
    ServiceResolver,
    ...ServiceCommandHandlers,
    ...ServiceQueryHandlers,
  ],

})
export class ServiceModule {

}
