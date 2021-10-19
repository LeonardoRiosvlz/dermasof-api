import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { LaboratoryExamsFeature } from './entities/laboratory-exams.entity';
import { LaboratoryExamsRepository } from './repositories/laboratory-exams.repository';
import { LaboratoryExamsCommandHandlers } from './cqrs/commands';

import { LaboratoryExamsMapper } from './mapper/laboratory-exams.mapper';
import { LaboratoryExamsResolver } from './graphql/resolvers/laboratory-exams.resolver';
import { LaboratoryExamsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { LaboratoryExamsEntityService } from './services/laboratory-exams-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([LaboratoryExamsFeature]),

    LaboratoryExamsMapper,
    LaboratoryExamsResolver,
    LaboratoryExamsRepository,
    LaboratoryExamsEntityService,
    LaboratoryExamsResolver,
    ...LaboratoryExamsCommandHandlers,
    ...LaboratoryExamsQueryHandlers,
  ],
  exports: [
    LaboratoryExamsRepository,
    LaboratoryExamsEntityService,
    LaboratoryExamsMapper
  ]

})
export class LaboratoryExamsModule {

}
