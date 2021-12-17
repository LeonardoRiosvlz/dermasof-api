import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { AppointmentsFeature } from './entities/appointments.entity';
import { AppointmentsRepository } from './repositories/appointments.repository';
import { AppointmentsCommandHandlers } from './cqrs/commands';

import { AppointmentsMapper } from './mapper/appointments.mapper';
import { AppointmentsResolver } from './graphql/resolvers/appointments.resolver';
import { AppointmentsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { AppointmentsEntityService } from './services/appointments-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([AppointmentsFeature]),

    AppointmentsMapper,
    AppointmentsResolver,
    AppointmentsRepository,
    AppointmentsEntityService,
    AppointmentsResolver,
    ...AppointmentsCommandHandlers,
    ...AppointmentsQueryHandlers,
  ],

})
export class AppointmentsModule {

}
