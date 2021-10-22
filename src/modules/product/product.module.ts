import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ProductFeature } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';
import { ProductCommandHandlers } from './cqrs/commands';

import { ProductMapper } from './mapper/product.mapper';
import { ProductResolver } from './graphql/resolvers/product.resolver';
import { ProductQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ProductEntityService } from './services/product-entity.service';
import { ProductCategoryModule } from './modules/product-category/product-category.module';


@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
    ProductCategoryModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ProductFeature]),

    ProductMapper,
    ProductResolver,
    ProductRepository,
    ProductEntityService,
    ProductResolver,
    ...ProductCommandHandlers,
    ...ProductQueryHandlers,
  ],

})
export class ProductModule {

}
