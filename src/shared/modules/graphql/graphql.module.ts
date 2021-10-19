import { gqlPubSubProvider } from './providers/gql-pubsub.provider';
import {Global, Module} from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { AppConfigService } from '../config/service/app-config-service';

@Global()
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [AppConfigService],
      async useFactory(config: AppConfigService) {
        return {
          autoSchemaFile: config.graphql.schema,
          installSubscriptionHandlers: true,
          playground: true, //config.app.nodeEnv !== NodeEnv.PRODUCTION,
          debug: true, //config.app.nodeEnv !== NodeEnv.PRODUCTION,
          introspection: true, //config.app.nodeEnv !== NodeEnv.PRODUCTION,
          cors: config.app.cors,
          //fieldResolverEnhancers: ['guards', 'interceptors', 'filters'],
          // validationRules: [depthLimit(config.graphql.depthLimit)],
          context: ({
                      req,
                      connection,
                    }: {
            req: Request;
            connection: any;
          }): { req: Request } => {
            // Return connection context when is a Subscription
            return connection ? { req: connection.context } : { req };
          },
          subscriptions: {
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            onConnect: connectionParams => {
              return { connectionParams };
            },
          },
          uploads: {
            maxFileSize: config.graphql.maxFileSize,
            maxFiles: config.graphql.maxFiles,
          },
        };
      },
    })

  ],
  providers: [...gqlPubSubProvider],
  exports: [...gqlPubSubProvider],
})
export class AppGraphqlModule {}
