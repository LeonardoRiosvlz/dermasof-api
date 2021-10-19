import { Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDataBaseConfig } from '../interfaces/IDataBaseConfig';
import { IAppConfig } from '../interfaces/IAppConfig';
import { IGraphqlConfig } from '../interfaces/IGraphqlConfig';
import { IMessageConfig } from '../interfaces/IMessageConfig';
import { IRedisConfig } from '../interfaces/IRedisConfig';
import { IAWSConfig } from '../interfaces/IAWSConfig';


const logLevels: LogLevel[] = ['verbose', 'debug', 'log', 'warn', 'error'];
function getLogLevel(level: string): LogLevel[] {
  const lvlIndex = logLevels.findIndex(ll => ll === level);
  return logLevels.filter((ll: LogLevel, index: number) => {
    if (lvlIndex <= index) return ll;
  });
}
@Injectable()
export class AppConfigService {
  constructor(private readonly _configService: ConfigService) { }

  app: IAppConfig = {
    cors: this._configService.get<boolean>('app.cors'),
    port: this._configService.get<number>('app.port'),
    nodeEnv: this._configService.get<string>('app.nodeEnv'),
    logLevel: getLogLevel(this._configService.get<string>('app.logLevel')),
    jwtSecret: this._configService.get<string>('app.jwtSecret'),
    jwtExpiration: this._configService.get<string>('app.jwtExpiration'),
    frontDomain: this._configService.get<string>('app.frontDomain'),
    name: this._configService.get<string>('app.name', 'dddApp'),
    multiTenant: this._configService.get<boolean>('app.multiTenant', false),

  };

  database: IDataBaseConfig = {
    connectString: this._configService.get<string>('database.connectString'),
    mainDbName: this._configService.get<string>('database.mainDbName'),
    getTenantConnectString(dbName?: string): string {
      if (!dbName) {
        dbName = this.mainDbName
      }
      return String(this.connectString).replace(
        '[[dbname]]',
        dbName,
      );
    }
  };

  graphql: IGraphqlConfig = {
    schema: this._configService.get<string>('graphql.schema'),
    maxFiles: this._configService.get<number>('graphql.maxFiles'),
    maxFileSize: this._configService.get<number>('graphql.maxFileSize'),
    depthLimit: this._configService.get<number>('graphql.depthLimit'),
  };

  smtp: IMessageConfig = {
    host: this._configService.get<string>('message.host'),
    port: this._configService.get<number>('message.port'),
    user: this._configService.get<string>('message.email'),
    pass: this._configService.get<string>('message.password'),
    emailValidationUrl: this._configService.get<string>('message.emailValidationUrl')
  }

  redis: IRedisConfig = {
    host: this._configService.get<string>('redis.host'),
    port: this._configService.get<number>('redis.port'),
    password: this._configService.get<string>('redis.password'),
  }

  aws: IAWSConfig = {
    keyId: this._configService.get<string>('aws.keyId'),
    keySecret: this._configService.get<string>('aws.keySecret'),
    bucket: this._configService.get<string>('aws.bucket'),
    region: this._configService.get<string>('aws.region'),
    cdnUrl: this._configService.get<string>('aws.cdnUrl')
  };

}
