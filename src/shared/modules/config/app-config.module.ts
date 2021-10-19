import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AppConfigService } from './service/app-config-service';
import { appConfig, appSchema } from './namespaces/app.config';
import { databaseSchema, databaseConfig } from './namespaces/database.config';
import { graphqlConfig, graphqlSchema } from './namespaces/graphql.config';
import { messageConfig, messageSchema } from './namespaces/message.config';
import { redisConfig } from './namespaces/redis.config';
import { awsConfig } from './namespaces/aws.config';


@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        graphqlConfig,
        messageConfig,
        redisConfig,
        awsConfig,

      ],
      validationSchema: Joi.object({
        ...appSchema,
        ...databaseSchema,
        ...graphqlSchema,
        ...messageSchema,
        ...redisConfig,
        ...awsConfig,
 
      }),
      validationOptions: { abortEarly: true },
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
