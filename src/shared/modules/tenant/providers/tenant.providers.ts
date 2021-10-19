import { Provider, Scope } from '@nestjs/common';
import { Connection } from 'mongoose';
import { IncomingMessage } from 'http';
import { REQUEST } from '@nestjs/core';
import { TenantRepository } from '../repositories/tenant.repository';
import { ITenantRequest } from 'src/shared/core/interfaces/ITenantRequest';
import { TenantEntity } from '../entities/tenant.entity';
import { TenantErrors } from '../errors/tenant.errors';
import { IAppTenantConnectionService } from '../services/tenant.connection.service';
import { Result } from 'src/shared/core/class/result';
import { AppConfigService } from '../../config/service/app-config-service';


export const TENANT = 'TENANT';
export const TENANT_CONNECTION = 'TENANT_CONNECTION';

export const tenantsProviders: Array<Provider> = [
  {
    provide: TENANT,
    scope: Scope.REQUEST,
    inject: [REQUEST, TenantRepository, AppConfigService],
    useFactory: async (
      request: ITenantRequest,
      _tenantRepo: TenantRepository,
      _config: AppConfigService,
    ): Promise<TenantEntity> => {
      if (!request) {
        return null;
      }
      if (!_config.app.multiTenant) {
        return null;
      }

      let tenantCode;
      if (request instanceof IncomingMessage && request?.headers) {
        tenantCode = request?.tenant ?? request?.headers?.['tenant'];
      } else if (request.req && request.req?.connectionParams) {
        const { req } = request;
        tenantCode = req.tenant ?? req.connectionParams?.['tenant'];
      } else {
        const req = request?.req as ITenantRequest;
        tenantCode = req?.tenant ?? req?.headers?.['tenant'];
      }
      if (tenantCode === undefined) {
        return null;
      }
      const tenant = await _tenantRepo.findOne({ code: { eq: String(tenantCode) } });
      if (!tenant) {
        throw new TenantErrors.TenantDoesNotExist(tenantCode);
      }
      return tenant;
    },
  },


  {
    provide: TENANT_CONNECTION,
    scope: Scope.REQUEST,
    inject: [TENANT, IAppTenantConnectionService.$],
    useFactory: async (
      tenant: TenantEntity,
      _tenantConnectionService: IAppTenantConnectionService,
    ): Promise<Connection> => {

      let cnxOrErr: Result<Connection> = null;
      if (!tenant) {
        cnxOrErr = _tenantConnectionService.getMainConnection() as Result<Connection>;
      } else {
        cnxOrErr = _tenantConnectionService.getTenantConnection(tenant) as Result<Connection>;
      }

      if (cnxOrErr.isFailure) {
        cnxOrErr.unwrapError().throw();
      }
      return cnxOrErr.unwrap();
    },
  },
];