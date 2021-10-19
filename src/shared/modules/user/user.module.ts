import { Module } from '@nestjs/common';

import {  UserFeature } from './entities/user.entity';
import { AppCqrsModule } from '../app-cqrs/app-cqrs.module';
import { DataAccessModule } from '../data-access/data-access.module';
import { AppGraphqlModule } from '../graphql/graphql.module';
import { TenantModule } from '../tenant/tenant.module';
import { TenantUtils } from '../tenant/utils/tenant.utils';
import { UserRepository } from './repositories/user.repository';
import { UserResolver } from './graphql/resolver/user.resolver';
import { UserQueryHandlers } from './cqrs/queries';
import { UserCommandHandlers } from './cqrs/commands';
import { ProfileFeature } from './entities/schemas/profile.schema';
import { UserMapper } from './mappers/user.mapper';
import { UserService } from './services/user.service';
import { UserRepositoryFactory } from './repositories/user.repository.factory';
import { IUserRepositoryFactory } from './interfaces/IUserRepositoryFactory';
import { UserAreaModule } from './modules/user-area/user-area.module';
import { ProfileResolver } from './graphql/resolver/profile.resolver';
import { RoleModule } from './modules/role/role.module';
import { UserEventsHandlers } from './cqrs/events';
import { AppLangModule } from '../app-lang/app-lang.module';
import { NotificationModule } from '../notification/notification.module';
import { AppConfigService } from '../config/service/app-config-service';
import { UserPositionModule } from './modules/user-position/user-position.module';



@Module({
  imports: [
    AppCqrsModule,
    AppGraphqlModule,
    DataAccessModule,
    NotificationModule,
    AppConfigService,
    AppLangModule,
    TenantModule,
    RoleModule,
    UserAreaModule,
    UserPositionModule 
  ],

  providers: [
    ...TenantUtils.buildTenantEntityProvider([UserFeature, ProfileFeature]),
    UserMapper,
    UserRepository,
    UserService,
    UserResolver,
    ProfileResolver,
    {
      provide: IUserRepositoryFactory.$,
      useClass: UserRepositoryFactory,
    },
    ...UserQueryHandlers,
    ...UserCommandHandlers,
    ...UserEventsHandlers
  ],
  exports: [UserService, UserMapper],
})
export class UserModule {
}
