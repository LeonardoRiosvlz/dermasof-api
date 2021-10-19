import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { IndicationsPatientFeature } from './entities/indications-patient.entity';
import { IndicationsPatientRepository } from './repositories/indications-patient.repository';
import { IndicationsPatientCommandHandlers } from './cqrs/commands';

import { IndicationsPatientMapper } from './mapper/indications-patient.mapper';
import { IndicationsPatientResolver } from './graphql/resolvers/indications-patient.resolver';
import { IndicationsPatientQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { IndicationsPatientEntityService } from './services/indications-patient-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([IndicationsPatientFeature]),

    IndicationsPatientMapper,
    IndicationsPatientResolver,
    IndicationsPatientRepository,
    IndicationsPatientEntityService,
    IndicationsPatientResolver,
    ...IndicationsPatientCommandHandlers,
    ...IndicationsPatientQueryHandlers,
  ],
  exports: [
    IndicationsPatientRepository,
    IndicationsPatientEntityService,
    IndicationsPatientMapper
  ]

})
export class IndicationsPatientModule {

}
