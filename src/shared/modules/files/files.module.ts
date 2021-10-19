import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesFeature } from './entities/files.entity';
import { FilesRepository } from './repositories/files.repository';
import { FilesCommandHandlers } from './cqrs/commands';

import { FilesMapper } from './mapper/files.mapper';
import { FilesResolver } from './graphql/resolvers/files.resolver';
import { FilesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesEntityService } from './services/files-entity.service';
import { AWSCloudService } from './services/aws-cloud.service';
import { AppFilesService } from './services/app-files.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesFeature]),

    FilesMapper,
    FilesResolver,
    FilesRepository,
    FilesEntityService,
    FilesResolver,
    AWSCloudService,
    AppFilesService,
    ...FilesCommandHandlers,
    ...FilesQueryHandlers,
  ],

  exports: [AWSCloudService, FilesEntityService, AppFilesService],

})
export class FilesModule {

}
