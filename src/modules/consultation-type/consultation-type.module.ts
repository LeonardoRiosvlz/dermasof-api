import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ConsultationTypeFeature } from './entities/consultation-type.entity';
import { ConsultationTypeRepository } from './repositories/consultation-type.repository';
import { ConsultationTypeCommandHandlers } from './cqrs/commands';

import { ConsultationTypeMapper } from './mapper/consultation-type.mapper';
import { ConsultationTypeResolver } from './graphql/resolvers/consultation-type.resolver';
import { ConsultationTypeQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ConsultationTypeEntityService } from './services/consultation-type-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ConsultationTypeFeature]),

    ConsultationTypeMapper,
    ConsultationTypeResolver,
    ConsultationTypeRepository,
    ConsultationTypeEntityService,
    ConsultationTypeResolver,
    ...ConsultationTypeCommandHandlers,
    ...ConsultationTypeQueryHandlers,
  ],

})
export class ConsultationTypeModule {

}
