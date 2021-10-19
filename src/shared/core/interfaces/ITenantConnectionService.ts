import { ITenant } from './ITenant';
import { Result } from '../class/result';

export interface ITenantConnectionService<CNX> {

  getTenantConnection(tenant?: ITenant): Result<CNX> | Promise<Result<CNX>>

  createConnection(tenant: ITenant): Result<CNX> | Promise<Result<CNX>>

  getMainConnection(): Result<CNX> | Promise<Result<CNX>>

  dropTenantDb(tenant: ITenant): Result<void> | Promise<Result<void>>

  getDbName(tenant?: ITenant): string | Promise<string>
}