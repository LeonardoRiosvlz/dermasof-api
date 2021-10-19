import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { SettingFeature } from './entities/setting.entity';
import { SettingRepository } from './repositories/setting.repository';
import { SettingCommandHandlers } from './cqrs/commands';

import { SettingMapper } from './mapper/setting.mapper';
import { SettingResolver } from './graphql/resolvers/setting.resolver';
import { SettingQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { SettingEntityService } from './services/setting-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([SettingFeature]),

    SettingMapper,
    SettingResolver,
    SettingRepository,
    SettingEntityService,
    SettingResolver,
    ...SettingCommandHandlers,
    ...SettingQueryHandlers,
  ],
  exports: [
    SettingRepository,
    SettingEntityService,
    SettingMapper
  ]

})
export class SettingModule {

}
