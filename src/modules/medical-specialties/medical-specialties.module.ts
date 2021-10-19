import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { MedicalSpecialtiesFeature } from './entities/medical-specialties.entity';
import { MedicalSpecialtiesRepository } from './repositories/medical-specialties.repository';
import { MedicalSpecialtiesCommandHandlers } from './cqrs/commands';

import { MedicalSpecialtiesMapper } from './mapper/medical-specialties.mapper';
import { MedicalSpecialtiesResolver } from './graphql/resolvers/medical-specialties.resolver';
import { MedicalSpecialtiesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { MedicalSpecialtiesEntityService } from './services/medical-specialties-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([MedicalSpecialtiesFeature]),

    MedicalSpecialtiesMapper,
    MedicalSpecialtiesResolver,
    MedicalSpecialtiesRepository,
    MedicalSpecialtiesEntityService,
    MedicalSpecialtiesResolver,
    ...MedicalSpecialtiesCommandHandlers,
    ...MedicalSpecialtiesQueryHandlers,
  ],
  exports: [
    MedicalSpecialtiesRepository,
    MedicalSpecialtiesEntityService,
    MedicalSpecialtiesMapper
  ]

})
export class MedicalSpecialtiesModule {

}
