import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { HeadquartersFeature } from './entities/headquarters.entity';
import { HeadquartersRepository } from './repositories/headquarters.repository';
import { HeadquartersCommandHandlers } from './cqrs/commands';

import { HeadquartersMapper } from './mapper/headquarters.mapper';
import { HeadquartersResolver } from './graphql/resolvers/headquarters.resolver';
import { HeadquartersQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { HeadquartersEntityService } from './services/headquarters-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([HeadquartersFeature]),

    HeadquartersMapper,
    HeadquartersResolver,
    HeadquartersRepository,
    HeadquartersEntityService,
    HeadquartersResolver,
    ...HeadquartersCommandHandlers,
    ...HeadquartersQueryHandlers,
  ],
  exports: [
    HeadquartersRepository,
    HeadquartersEntityService,
    HeadquartersMapper
  ]

})
export class HeadquartersModule {

}
