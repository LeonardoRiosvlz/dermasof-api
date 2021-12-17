import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PhotographicReportFeature } from './entities/photographic-report.entity';
import { PhotographicReportRepository } from './repositories/photographic-report.repository';
import { PhotographicReportCommandHandlers } from './cqrs/commands';

import { PhotographicReportMapper } from './mapper/photographic-report.mapper';
import { PhotographicReportResolver } from './graphql/resolvers/photographic-report.resolver';
import { PhotographicReportQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PhotographicReportEntityService } from './services/photographic-report-entity.service';
import { FilesPhotographicReportModule } from './modules/files-photographic-report/files-photographic-report.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    FilesPhotographicReportModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PhotographicReportFeature]),

    PhotographicReportMapper,
    PhotographicReportResolver,
    PhotographicReportRepository,
    PhotographicReportEntityService,
    PhotographicReportResolver,
    ...PhotographicReportCommandHandlers,
    ...PhotographicReportQueryHandlers,
  ],

})
export class PhotographicReportModule {

}
