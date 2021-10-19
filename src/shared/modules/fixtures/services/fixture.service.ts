import { IFixtureService } from '../interfaces/IFixtureService';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ITenant } from '../../../core/interfaces/ITenant';
import { Result } from '../../../core/class/result';

import { ModuleRef } from '@nestjs/core';
import { Connection, Model } from 'mongoose';
import { IAppTenantConnectionService } from '../../tenant/services/tenant.connection.service';
import { IEntity } from '../../../core/interfaces/IEntity';
import { TenantEntity, TenantFeature } from '../../tenant/entities/tenant.entity';
import { IFixture, ModelDef } from '../interfaces/IFixture';
import FIXTURES from '../resources/fixtures';
import { ComputedDataService } from './computed-data.service';

@Injectable()
export class FixtureService implements IFixtureService, OnModuleInit {

  protected _logger: Logger;

  constructor(private _moduleRef: ModuleRef,
    @Inject(IAppTenantConnectionService.$) private _appTenantCnxService: IAppTenantConnectionService) {

    this._logger = new Logger(FixtureService.name);
  }

  async onModuleInit() {
    await this.setInitialData();
    await this.setComputedData()
  }


  async setComputedData(): Promise<void> {

    const computedMain = new ComputedDataService(this)
    await computedMain.process()



    const tenants = await this.getAvailableTenants();
    for (const t of tenants) {
      const computedTenant = new ComputedDataService(this, t)
      await computedTenant.process()
    }


  }


  //--------------------------------
  async setInitialData(): Promise<void> {
    for (const fix of FIXTURES) {
      await this.setDefaultData<IEntity>(fix);
    }
    const tenants = await this.getAvailableTenants();
    for (const t of tenants) {
      await this.setTenantData(t);
    }
  }


  async setTenantData(tenant: ITenant): Promise<void> {
    for (const fix of FIXTURES) {
      await this.setDefaultData<IEntity>(fix, tenant);
    }
  }


  getRepository<Entity extends IEntity, F extends ModelDef>(feature: F, tenant?: ITenant): Model<Entity> | null {

    const connectionOrErr = this._appTenantCnxService.getTenantConnection(tenant) as Result<Connection>;
    if (connectionOrErr.isSuccess) {
      const connection = connectionOrErr.unwrap();
      return connection.model<Entity>(feature.name, feature.schema);
    }
    return null;
  }


  async setDefaultData<E extends IEntity>(fixture: IFixture<E>, tenant?: ITenant): Promise<void> {

    let mainRepo: Model<E> = null;
    let tenantRepo: Model<E> = null;
    switch (fixture.target) {
      case 'mainDb':
        mainRepo = this.getRepository<E, ModelDef>(fixture.feature, null);
        if (mainRepo && (await mainRepo.countDocuments({})) === 0) {
          await mainRepo.create(fixture.entities);
          this._logger.debug(`Set default ${fixture.feature.name} in: ${this._appTenantCnxService.getDbName()} database`);

        }
        break;

      case 'tenantDb':
        tenantRepo = tenant ? this.getRepository<E, ModelDef>(fixture.feature, tenant) : null;
        if (tenantRepo && (await tenantRepo.countDocuments({})) === 0) {
          await tenantRepo.create(fixture.entities);
          this._logger.debug(`Set default ${fixture.feature.name} in: ${this._appTenantCnxService.getDbName(tenant)} database`);

        }
        break;

      case 'both':
        mainRepo = this.getRepository<E, ModelDef>(fixture.feature, null);
        tenantRepo = tenant ? this.getRepository<E, ModelDef>(fixture.feature, tenant) : null;
        if (mainRepo && (await mainRepo.countDocuments({})) === 0) {
          await mainRepo.create(fixture.entities);
          this._logger.debug(`Set default ${fixture.feature.name} in: ${this._appTenantCnxService.getDbName()} database`);
        }
        if (tenantRepo && (await tenantRepo.countDocuments({})) === 0) {
          await tenantRepo.create(fixture.entities);
          this._logger.debug(`Set default ${fixture.feature.name} in: ${this._appTenantCnxService.getDbName(tenant)} database`);

        }

        break;
    }

  }


  async getAvailableTenants(): Promise<Array<ITenant>> {
    const connectionOrErr = this._appTenantCnxService.getMainConnection() as Result<Connection>;
    if (connectionOrErr.isFailure) {
      connectionOrErr.unwrapError().throw();
    }
    const connection = connectionOrErr.unwrap();
    const tenantRepo = connection.model<TenantEntity>(TenantFeature.name, TenantFeature.schema);
    return tenantRepo.find({}).lean();
  }

}