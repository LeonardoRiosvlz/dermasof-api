import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ServiceCategoryFeature } from './entities/service-category.entity';
import { ServiceCategoryRepository } from './repositories/service-category.repository';
import { ServiceCategoryCommandHandlers } from './cqrs/commands';

import { ServiceCategoryMapper } from './mapper/service-category.mapper';
import { ServiceCategoryResolver } from './graphql/resolvers/service-category.resolver';
import { ServiceCategoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ServiceCategoryEntityService } from './services/service-category-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ServiceCategoryFeature]),

    ServiceCategoryMapper,
    ServiceCategoryResolver,
    ServiceCategoryRepository,
    ServiceCategoryEntityService,
    ServiceCategoryResolver,
    ...ServiceCategoryCommandHandlers,
    ...ServiceCategoryQueryHandlers,
  ],

})
export class ServiceCategoryModule {

}
