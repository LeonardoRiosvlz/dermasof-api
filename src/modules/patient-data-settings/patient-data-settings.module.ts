import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PatientDataSettingsFeature } from './entities/patient-data-settings.entity';
import { PatientDataSettingsRepository } from './repositories/patient-data-settings.repository';
import { PatientDataSettingsCommandHandlers } from './cqrs/commands';

import { PatientDataSettingsMapper } from './mapper/patient-data-settings.mapper';
import { PatientDataSettingsResolver } from './graphql/resolvers/patient-data-settings.resolver';
import { PatientDataSettingsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PatientDataSettingsEntityService } from './services/patient-data-settings-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PatientDataSettingsFeature]),

    PatientDataSettingsMapper,
    PatientDataSettingsResolver,
    PatientDataSettingsRepository,
    PatientDataSettingsEntityService,
    PatientDataSettingsResolver,
    ...PatientDataSettingsCommandHandlers,
    ...PatientDataSettingsQueryHandlers,
  ],
  exports: [
    PatientDataSettingsRepository,
    PatientDataSettingsEntityService,
    PatientDataSettingsMapper
  ]

})
export class PatientDataSettingsModule {

}
