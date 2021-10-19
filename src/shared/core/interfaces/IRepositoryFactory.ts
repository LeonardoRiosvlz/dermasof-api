import { IEntity } from './IEntity';
import { IRepository, IRepositoryFilter } from './IRepository';

export interface IRepositoryFactory<
  Connection,
  Entity extends IEntity,
  FilterableFields extends IRepositoryFilter<Entity> > {

  build(connection: Connection): IRepository<Entity, FilterableFields>;
}

export namespace IRepositoryFactory {
  export const $ = Symbol('IRepositoryFactory');
}