import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ProductCategoryFeature } from './entities/product-category.entity';
import { ProductCategoryRepository } from './repositories/product-category.repository';
import { ProductCategoryCommandHandlers } from './cqrs/commands';

import { ProductCategoryMapper } from './mapper/product-category.mapper';
import { ProductCategoryResolver } from './graphql/resolvers/product-category.resolver';
import { ProductCategoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ProductCategoryEntityService } from './services/product-category-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ProductCategoryFeature]),

    ProductCategoryMapper,
    ProductCategoryResolver,
    ProductCategoryRepository,
    ProductCategoryEntityService,
    ProductCategoryResolver,
    ...ProductCategoryCommandHandlers,
    ...ProductCategoryQueryHandlers,
  ],

})
export class ProductCategoryModule {

}
