import { Provider } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';
import { set } from 'lodash';
import { AppConfigService } from '../../config/service/app-config-service';
import { PubSub } from 'graphql-subscriptions';


export const PUB_SUB = 'PUB_SUB';
export const REDIS_PUB_SUB = 'REDIS_PUB_SUB';
export const gqlPubSubProvider: Array<Provider> = [
  {
    provide: PUB_SUB,
    useValue: new PubSub(),
  },
  {
    provide: REDIS_PUB_SUB,
    inject: [AppConfigService],
    useFactory: (_configService: AppConfigService): RedisPubSub => {
      const options = {
        host: _configService.redis.host,
        port: _configService.redis.port,
      };
      const pass = _configService.redis.password;
      if (pass) {
        set(options, 'password', pass);
      }

      return new RedisPubSub({
        publisher: new Redis(options),
        subscriber: new Redis(options),
      });
    },

  },
];
