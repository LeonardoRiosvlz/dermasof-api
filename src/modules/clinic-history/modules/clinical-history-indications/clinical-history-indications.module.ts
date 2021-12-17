import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClinicalHistoryIndicationsFeature } from './entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsRepository } from './repositories/clinical-history-indications.repository';
import { ClinicalHistoryIndicationsCommandHandlers } from './cqrs/commands';

import { ClinicalHistoryIndicationsMapper } from './mapper/clinical-history-indications.mapper';
import { ClinicalHistoryIndicationsResolver } from './graphql/resolvers/clinical-history-indications.resolver';
import { ClinicalHistoryIndicationsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClinicalHistoryIndicationsEntityService } from './services/clinical-history-indications-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClinicalHistoryIndicationsFeature]),

    ClinicalHistoryIndicationsMapper,
    ClinicalHistoryIndicationsResolver,
    ClinicalHistoryIndicationsRepository,
    ClinicalHistoryIndicationsEntityService,
    ClinicalHistoryIndicationsResolver,
    ...ClinicalHistoryIndicationsCommandHandlers,
    ...ClinicalHistoryIndicationsQueryHandlers,
  ],

})
export class ClinicalHistoryIndicationsModule {

}
