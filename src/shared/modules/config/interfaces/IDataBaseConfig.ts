/**
 * Database configuration
 *
 * @export
 * @interface IDataBaseConfig
 */
export interface IDataBaseConfig {
  /**
   * Database connection string. Could be useful with MongoDb.
   *
   * @type {string}
   * @memberof IDataBaseConfig
   */
  connectString?: string;


  /**
   * Main db name. Form multi-tenant purposes
   *
   * @type {string}
   * @memberof IDataBaseConfig
   */
  mainDbName?:string

  getTenantConnectString(dbName?: string): string
}
