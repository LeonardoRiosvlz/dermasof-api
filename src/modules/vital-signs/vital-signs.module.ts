import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { VitalSignsFeature } from './entities/vital-signs.entity';
import { VitalSignsRepository } from './repositories/vital-signs.repository';
import { VitalSignsCommandHandlers } from './cqrs/commands';

import { VitalSignsMapper } from './mapper/vital-signs.mapper';
import { VitalSignsResolver } from './graphql/resolvers/vital-signs.resolver';
import { VitalSignsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { VitalSignsEntityService } from './services/vital-signs-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([VitalSignsFeature]),

    VitalSignsMapper,
    VitalSignsResolver,
    VitalSignsRepository,
    VitalSignsEntityService,
    VitalSignsResolver,
    ...VitalSignsCommandHandlers,
    ...VitalSignsQueryHandlers,
  ],

})
export class VitalSignsModule {

}
