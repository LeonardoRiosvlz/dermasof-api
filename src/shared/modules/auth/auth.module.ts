import { Module } from '@nestjs/common';
import { AppGraphqlModule } from '../graphql/graphql.module';
import { AppConfigModule } from '../config/app-config.module';

import { AuthCommandsHandlers } from './cqrs/commands';
import { JwtStrategy } from './passport/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AppConfigService } from '../config/service/app-config-service';
import { AuthResolver } from './graphql/resolvers/auth.resolver';
import { GqlAuthGuard } from './guard/graphql.guard';
import { AppCqrsModule } from '../app-cqrs/app-cqrs.module';
import { AuthQueryHandlers } from './cqrs/queries';
import { TenantModule } from '../tenant/tenant.module';
import { UserModule } from '../user/user.module';
import { JwtAuthService } from './services/JwtAuthService';
import { PermitsGuard } from './guard/permits.guard';
import { AuthEventsHandlers } from './cqrs/events';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    AppCqrsModule,
    TenantModule,
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.registerAsync({
      inject: [AppConfigService],
      useFactory: (_configService: AppConfigService): JwtModuleOptions => {
        return {
          signOptions: {
            expiresIn: _configService.app.jwtExpiration ?? '73h',
          },
          secret: _configService.app.jwtSecret,
        };
      },
    }),

  ],
  providers: [
    JwtStrategy,
    AuthResolver,
    PermitsGuard,
    GqlAuthGuard,
    JwtAuthService,
    ...AuthCommandsHandlers,
    ...AuthQueryHandlers,
    ...AuthEventsHandlers,
  ],
  exports: [
    JwtStrategy,
    PermitsGuard,
    GqlAuthGuard,
  ],
})
export class AuthModule {
}
