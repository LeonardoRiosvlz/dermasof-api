import { ITenant } from '../../../core/interfaces/ITenant';
import { IEntity } from '../../../core/interfaces/IEntity';
import { IFixture, ModelDef } from './IFixture';

export interface IFixtureService {


  //--------------------------------------------


  setInitialData(): Promise<void>

  setComputedData(): Promise<void>

  setTenantData(tenant: ITenant): Promise<void>

  getRepository<Entity extends IEntity, F extends ModelDef, >(feature: F, tenant?: ITenant, ): unknown

  setDefaultData<E extends IEntity>(fixture: IFixture<E>, tenant?: ITenant): Promise<void>

  getAvailableTenants(): Promise<Array<ITenant>>

}