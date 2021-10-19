import { IEntity } from './IEntity';

export interface IEntityHooks<E extends IEntity>  {
  afterCreate?: (entity: E, ...arg: Array<any>) =>  Promise<void>
  afterUpdate?: (entity: E, ...arg: Array<any>) =>  Promise<void>
  afterDelete?: (entity: E, ...arg: Array<any>) =>  Promise<void>
}