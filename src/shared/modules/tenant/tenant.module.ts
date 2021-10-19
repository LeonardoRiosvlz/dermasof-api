import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantFeature } from './entities/tenant.entity';

import { tenantsProviders } from './providers/tenant.providers';
import { TenantMiddleware } from './middlewares/tenant.middleware';
import { AppCqrsModule } from '../app-cqrs/app-cqrs.module';
import { TenantRepository } from './repositories/tenant.repository';
import { TenantMapper } from './mappers/tenant.mapper';
import { TenantResolver } from './graphql/resolver/tenant.resolver';
import { tenantServicesProviders } from './services';
import { TenantQueryHandlers } from './cqrs/queries';
import { TenantCommandHandlers } from './cqrs/commands';
import { TenantsEventsHandlers } from './cqrs/events';
import { TenantInfoFeature } from './entities/schemas/tenant-info.schema';


@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    AppCqrsModule,
    MongooseModule.forFeature([
      TenantFeature,
      TenantInfoFeature,
    ]),
  ],
  providers: [
    TenantMapper,
    TenantResolver,
   // TenantInfoResolver,
    TenantRepository,
    ...TenantQueryHandlers,
    ...TenantCommandHandlers,
    ...TenantsEventsHandlers,
    ...tenantServicesProviders,
    ...tenantsProviders,
  ],
  exports: [...tenantsProviders, ...tenantServicesProviders],

})
export class TenantModule {


  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .forRoutes('*');
  }
}
