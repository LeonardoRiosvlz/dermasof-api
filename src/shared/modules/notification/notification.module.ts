import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { NotificationFeature } from './entities/notification.entity';
import { NotificationRepository } from './repositories/notification.repository';
import { NotificationCommandHandlers } from './cqrs/commands';

import { NotificationMapper } from './mapper/notification.mapper';
import { NotificationResolver } from './graphql/resolvers/notification.resolver';
import { NotificationQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { NotificationEntityService } from './services/notification-entity.service';
import { AppMailService } from './services/app-mail.service';
import { I18nMessageFeature } from './entities/schema/i18n-message.schema';
import { AppNotificationService } from './services/app-notification.service';
import { AppLangModule } from '../app-lang/app-lang.module';
import { join } from 'path';
import { MailerModule, MailerOptions } from '@nestjs-modules/mailer';
import { AppConfigService } from '../config/service/app-config-service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    AppLangModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,

    MailerModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (_config: AppConfigService) => {
        const port = _config.smtp.port;
        const secure = _config.smtp.port === 465 ||
          _config.smtp.port === 8465 ||
          _config.smtp.port === 443;

        const templatePath = join(process.cwd(), 'templates');
        return {
          transport: {
            host: _config.smtp.host,
            port,
            tls: {
              rejectUnauthorized: false,
            },
            secure,
            auth: {
              user: _config.smtp.user,
              pass: _config.smtp.pass,
            },
          },
          defaults: {
            from: `${_config.app.name} <${_config.smtp.user}>`,
          },
          template: {
            dir: templatePath,
            adapter: new HandlebarsAdapter(),
            options: {
              strict: false,
            },
          },
        } as MailerOptions;
      },
    }),
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([NotificationFeature, I18nMessageFeature]),

    NotificationMapper,
    NotificationResolver,
    NotificationRepository,
    NotificationEntityService,
    NotificationResolver,
    AppMailService,
    AppNotificationService,
    ...NotificationCommandHandlers,
    ...NotificationQueryHandlers,
  ],

  exports: [AppMailService, AppNotificationService,]

})
export class NotificationModule {

}
