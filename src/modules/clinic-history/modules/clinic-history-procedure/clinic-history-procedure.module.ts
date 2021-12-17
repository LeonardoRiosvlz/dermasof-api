import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClinicHistoryProcedureFeature } from './entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureRepository } from './repositories/clinic-history-procedure.repository';
import { ClinicHistoryProcedureCommandHandlers } from './cqrs/commands';

import { ClinicHistoryProcedureMapper } from './mapper/clinic-history-procedure.mapper';
import { ClinicHistoryProcedureResolver } from './graphql/resolvers/clinic-history-procedure.resolver';
import { ClinicHistoryProcedureQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClinicHistoryProcedureEntityService } from './services/clinic-history-procedure-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClinicHistoryProcedureFeature]),

    ClinicHistoryProcedureMapper,
    ClinicHistoryProcedureResolver,
    ClinicHistoryProcedureRepository,
    ClinicHistoryProcedureEntityService,
    ClinicHistoryProcedureResolver,
    ...ClinicHistoryProcedureCommandHandlers,
    ...ClinicHistoryProcedureQueryHandlers,
  ],

})
export class ClinicHistoryProcedureModule {

}
