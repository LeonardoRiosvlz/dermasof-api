import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PatientSafetyCheckFeature } from './entities/patient-safety-check.entity';
import { PatientSafetyCheckRepository } from './repositories/patient-safety-check.repository';
import { PatientSafetyCheckCommandHandlers } from './cqrs/commands';

import { PatientSafetyCheckMapper } from './mapper/patient-safety-check.mapper';
import { PatientSafetyCheckResolver } from './graphql/resolvers/patient-safety-check.resolver';
import { PatientSafetyCheckQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PatientSafetyCheckEntityService } from './services/patient-safety-check-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PatientSafetyCheckFeature]),

    PatientSafetyCheckMapper,
    PatientSafetyCheckResolver,
    PatientSafetyCheckRepository,
    PatientSafetyCheckEntityService,
    PatientSafetyCheckResolver,
    ...PatientSafetyCheckCommandHandlers,
    ...PatientSafetyCheckQueryHandlers,
  ],
  exports: [
    PatientSafetyCheckRepository,
    PatientSafetyCheckEntityService,
    PatientSafetyCheckMapper
  ]

})
export class PatientSafetyCheckModule {

}
