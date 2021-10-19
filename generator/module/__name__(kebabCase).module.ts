import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { __name__Feature } from './entities/__name__(kebabCase).entity';
import { __name__Repository } from './repositories/__name__(kebabCase).repository';
import { __name__CommandHandlers } from './cqrs/commands';

import { __name__Mapper } from './mapper/__name__(kebabCase).mapper';
import { __name__Resolver } from './graphql/resolvers/__name__(kebabCase).resolver';
import { __name__QueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { __name__EntityService } from './services/__name__(kebabCase)-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([__name__Feature]),

    __name__Mapper,
    __name__Resolver,
    __name__Repository,
    __name__EntityService,
    __name__Resolver,
    ...__name__CommandHandlers,
    ...__name__QueryHandlers,
  ],

})
export class __name__Module {

}
