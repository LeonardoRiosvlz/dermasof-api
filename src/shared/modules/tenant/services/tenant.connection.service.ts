import { Connection, connections, createConnection } from 'mongoose';

import { Inject } from '@nestjs/common';
import { ITenantConnectionService } from 'src/shared/core/interfaces/ITenantConnectionService';
import { AppConfigService } from '../../config/service/app-config-service';
import { TenantEntity } from '../entities/tenant.entity';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { TenantErrors } from '../errors/tenant.errors';


export type IAppTenantConnectionService = ITenantConnectionService<Connection>

export class TenantConnectionService implements IAppTenantConnectionService {

  constructor(@Inject(AppConfigService) private readonly _configService: AppConfigService) {
  }

  createConnection(tenant: TenantEntity): Result<Connection> {
    try {
      return Result.Ok(createConnection(
        this._configService.database.getTenantConnectString(
          this.getDbName(tenant)),
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
      ));
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async dropTenantDb(tenant: TenantEntity): Promise<Result<void>> {
    try {
      const cnx: Connection = connections.find(c => c.name === this.getDbName(tenant));
      if (cnx) {
        await cnx.dropDatabase();
        return Result.Ok();
      } else {
        return Result.Fail(new TenantErrors.NoTenantConnection(tenant.code));
      }
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  getMainConnection(): Result<Connection> {
    try {
      return Result.Ok(createConnection(
        this._configService.database.getTenantConnectString(
          `${this._configService.database.mainDbName}`),
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
      ));
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  getTenantConnection(tenant?: TenantEntity): Result<Connection> {
    try {

      if (!tenant) {
        return this.getMainConnection();
      }

      const tenantCnx = connections.find((cnx: Connection) => {
        return cnx?.name === this.getDbName(tenant);
      });

      // Check if connection exist and is ready to execute
      if (tenantCnx && tenantCnx.readyState === 1) {
        return Result.Ok(tenantCnx);
      }
      const cnxOrErr = this.createConnection(tenant);
      if (cnxOrErr.isFailure) {
        return Result.Fail(cnxOrErr.unwrapError());
      }
      return Result.Ok(cnxOrErr.unwrap());
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  getDbName(tenant?: TenantEntity): string {
    return tenant ? `${this._configService.database.mainDbName}-${tenant.code}` :
      `${this._configService.database.mainDbName}`;
  }
}

export namespace IAppTenantConnectionService {
  export const $ = Symbol('IAppTenantConnectionService');
}