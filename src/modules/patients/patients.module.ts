import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { PatientsFeature } from './entities/patients.entity';
import { PatientsRepository } from './repositories/patients.repository';
import { PatientsCommandHandlers } from './cqrs/commands';

import { PatientsMapper } from './mapper/patients.mapper';
import { PatientsResolver } from './graphql/resolvers/patients.resolver';
import { PatientsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { PatientsEntityService } from './services/patients-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([PatientsFeature]),

    PatientsMapper,
    PatientsResolver,
    PatientsRepository,
    PatientsEntityService,
    PatientsResolver,
    ...PatientsCommandHandlers,
    ...PatientsQueryHandlers,
  ],

})
export class PatientsModule {

}
