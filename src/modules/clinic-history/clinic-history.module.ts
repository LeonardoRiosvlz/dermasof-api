import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClinicHistoryFeature } from './entities/clinic-history.entity';
import { ClinicHistoryRepository } from './repositories/clinic-history.repository';
import { ClinicHistoryCommandHandlers } from './cqrs/commands';

import { ClinicHistoryMapper } from './mapper/clinic-history.mapper';
import { ClinicHistoryResolver } from './graphql/resolvers/clinic-history.resolver';
import { ClinicHistoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClinicHistoryEntityService } from './services/clinic-history-entity.service';
import { ClinicHistoryDiagnosisModule } from './modules/clinic-history-diagnosis/clinic-history-diagnosis.module';
import { ClinicalHistoryIndicationsModule } from './modules/clinical-history-indications/clinical-history-indications.module';
import { ClinicHistoryProcedureModule } from './modules/clinic-history-procedure/clinic-history-procedure.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    ClinicHistoryDiagnosisModule,
    ClinicalHistoryIndicationsModule,
    ClinicHistoryProcedureModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClinicHistoryFeature]),

    ClinicHistoryMapper,
    ClinicHistoryResolver,
    ClinicHistoryRepository,
    ClinicHistoryEntityService,
    ClinicHistoryResolver,
    ...ClinicHistoryCommandHandlers,
    ...ClinicHistoryQueryHandlers,
  ],

})
export class ClinicHistoryModule {

}
