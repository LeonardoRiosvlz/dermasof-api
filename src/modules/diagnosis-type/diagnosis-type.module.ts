import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DiagnosisTypeFeature } from './entities/diagnosis-type.entity';
import { DiagnosisTypeRepository } from './repositories/diagnosis-type.repository';
import { DiagnosisTypeCommandHandlers } from './cqrs/commands';

import { DiagnosisTypeMapper } from './mapper/diagnosis-type.mapper';
import { DiagnosisTypeResolver } from './graphql/resolvers/diagnosis-type.resolver';
import { DiagnosisTypeQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DiagnosisTypeEntityService } from './services/diagnosis-type-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DiagnosisTypeFeature]),

    DiagnosisTypeMapper,
    DiagnosisTypeResolver,
    DiagnosisTypeRepository,
    DiagnosisTypeEntityService,
    DiagnosisTypeResolver,
    ...DiagnosisTypeCommandHandlers,
    ...DiagnosisTypeQueryHandlers,
  ],
  exports: [
    DiagnosisTypeRepository,
    DiagnosisTypeEntityService,
    DiagnosisTypeMapper
  ]

})
export class DiagnosisTypeModule {

}
