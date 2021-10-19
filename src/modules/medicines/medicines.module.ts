import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { MedicinesFeature } from './entities/medicines.entity';
import { MedicinesRepository } from './repositories/medicines.repository';
import { MedicinesCommandHandlers } from './cqrs/commands';

import { MedicinesMapper } from './mapper/medicines.mapper';
import { MedicinesResolver } from './graphql/resolvers/medicines.resolver';
import { MedicinesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { MedicinesEntityService } from './services/medicines-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([MedicinesFeature]),

    MedicinesMapper,
    MedicinesResolver,
    MedicinesRepository,
    MedicinesEntityService,
    MedicinesResolver,
    ...MedicinesCommandHandlers,
    ...MedicinesQueryHandlers,
  ],
  exports: [
    MedicinesRepository,
    MedicinesEntityService,
    MedicinesMapper
  ]

})
export class MedicinesModule {

}
