import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ProceduresFeature } from './entities/procedures.entity';
import { ProceduresRepository } from './repositories/procedures.repository';
import { ProceduresCommandHandlers } from './cqrs/commands';

import { ProceduresMapper } from './mapper/procedures.mapper';
import { ProceduresResolver } from './graphql/resolvers/procedures.resolver';
import { ProceduresQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ProceduresEntityService } from './services/procedures-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ProceduresFeature]),

    ProceduresMapper,
    ProceduresResolver,
    ProceduresRepository,
    ProceduresEntityService,
    ProceduresResolver,
    ...ProceduresCommandHandlers,
    ...ProceduresQueryHandlers,
  ],
  exports: [
    ProceduresRepository,
    ProceduresEntityService,
    ProceduresMapper
  ]

})
export class ProceduresModule {

}
