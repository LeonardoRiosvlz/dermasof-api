import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClinicHistoryDiagnosisFeature } from './entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisRepository } from './repositories/clinic-history-diagnosis.repository';
import { ClinicHistoryDiagnosisCommandHandlers } from './cqrs/commands';

import { ClinicHistoryDiagnosisMapper } from './mapper/clinic-history-diagnosis.mapper';
import { ClinicHistoryDiagnosisResolver } from './graphql/resolvers/clinic-history-diagnosis.resolver';
import { ClinicHistoryDiagnosisQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClinicHistoryDiagnosisEntityService } from './services/clinic-history-diagnosis-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClinicHistoryDiagnosisFeature]),

    ClinicHistoryDiagnosisMapper,
    ClinicHistoryDiagnosisResolver,
    ClinicHistoryDiagnosisRepository,
    ClinicHistoryDiagnosisEntityService,
    ClinicHistoryDiagnosisResolver,
    ...ClinicHistoryDiagnosisCommandHandlers,
    ...ClinicHistoryDiagnosisQueryHandlers,
  ],
  exports:[
    ClinicHistoryDiagnosisRepository
  ]

})
export class ClinicHistoryDiagnosisModule {

}
