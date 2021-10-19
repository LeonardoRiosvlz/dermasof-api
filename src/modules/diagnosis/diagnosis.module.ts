import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DiagnosisFeature } from './entities/diagnosis.entity';
import { DiagnosisRepository } from './repositories/diagnosis.repository';
import { DiagnosisCommandHandlers } from './cqrs/commands';

import { DiagnosisMapper } from './mapper/diagnosis.mapper';
import { DiagnosisResolver } from './graphql/resolvers/diagnosis.resolver';
import { DiagnosisQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DiagnosisEntityService } from './services/diagnosis-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DiagnosisFeature]),

    DiagnosisMapper,
    DiagnosisResolver,
    DiagnosisRepository,
    DiagnosisEntityService,
    DiagnosisResolver,
    ...DiagnosisCommandHandlers,
    ...DiagnosisQueryHandlers,
  ],
  exports: [
    DiagnosisRepository,
    DiagnosisEntityService,
    DiagnosisMapper
  ]

})
export class DiagnosisModule {

}
