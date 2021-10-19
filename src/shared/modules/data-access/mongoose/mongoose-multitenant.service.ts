import { Inject, Injectable, Scope } from '@nestjs/common';

import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { ITenantRequest } from 'src/shared/core/interfaces/ITenantRequest';
import { AppConfigService } from '../../config/service/app-config-service';

@Injectable({ scope: Scope.REQUEST })
export class MongooseMultiTenantConfigService implements MongooseOptionsFactory {

  constructor(
    @Inject(REQUEST) private readonly request: ITenantRequest,
    private readonly _appConfigService: AppConfigService,
  ) {
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this._appConfigService.database.getTenantConnectString(),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      connectionName: this._appConfigService.database.mainDbName,
    }
  }

}