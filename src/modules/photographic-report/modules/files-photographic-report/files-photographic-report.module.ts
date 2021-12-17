import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesPhotographicReportFeature } from './entities/files-photographic-report.entity';
import { FilesPhotographicReportRepository } from './repositories/files-photographic-report.repository';
import { FilesPhotographicReportCommandHandlers } from './cqrs/commands';

import { FilesPhotographicReportMapper } from './mapper/files-photographic-report.mapper';
import { FilesPhotographicReportResolver } from './graphql/resolvers/files-photographic-report.resolver';
import { FilesPhotographicReportQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesPhotographicReportEntityService } from './services/files-photographic-report-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesPhotographicReportFeature]),

    FilesPhotographicReportMapper,
    FilesPhotographicReportResolver,
    FilesPhotographicReportRepository,
    FilesPhotographicReportEntityService,
    FilesPhotographicReportResolver,
    ...FilesPhotographicReportCommandHandlers,
    ...FilesPhotographicReportQueryHandlers,
  ],
  exports:[
    FilesPhotographicReportRepository
  ]

})
export class FilesPhotographicReportModule {

}
