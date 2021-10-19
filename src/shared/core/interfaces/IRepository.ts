import { Identifier } from './IEntity';
import { OrderByType } from './IOrderByType';
import { IPaginatedData } from './IPaginatedData';
import { IPaginatorParams } from './IPaginatorParams';
import { Result } from '../class/result';


export type IRepositoryFilter<T> = {
  [P in keyof T]?: any
}



export type IncludesType<E> = Array<keyof E>

export interface IRepository<Entity, FilterFields extends IRepositoryFilter<Entity>> {


  setConnection(...args: any[]): Promise<void> | void

  save(entity: Entity): Promise<void> | void;

  saveMany?(entity: Entity[]): Promise<void> | void;

  drop(entity: Entity): Promise<void> | void;

  dropById(id: Identifier): Promise<void> | void;

  deleteOne(where?: IRepositoryFilter<FilterFields>): Promise<void> | void;

  findById(
    id: Identifier,
    includes?: IncludesType<Entity>,
  ): Promise<Entity> | Entity | null;

  updateById(id: Identifier, update: Partial<Entity>): Promise<void> | void;

  updateMany(update: Partial<Entity>, where?: IRepositoryFilter<FilterFields>): Promise<void> | void;

  findOne(
    where?: IRepositoryFilter<FilterFields>,
    orderBy?: OrderByType<FilterFields>,
    includes?: IncludesType<Entity>,
  ): Promise<Entity> | Entity | null;

  deleteMany(
    where?: IRepositoryFilter<FilterFields>,
  ): Promise<void> | void;

  count(
    where?: IRepositoryFilter<FilterFields>,
  ): Promise<number> | number;

  getAllPaginated(
    pageParams?: IPaginatorParams,
    where?: IRepositoryFilter<FilterFields>,
    orderBy?: OrderByType<FilterFields>,
    includes?: IncludesType<Entity>,
  ): Promise<IPaginatedData<Entity>> | IPaginatedData<Entity>;

  exist(where?: IRepositoryFilter<FilterFields>): Promise<boolean> | boolean;

  getAllIterable(
    where?: IRepositoryFilter<FilterFields>,
    orderBy?: OrderByType<FilterFields>,
    includes?: IncludesType<Entity>,
    bashSize?: number,
  ): AsyncGenerator<Result<Entity>>
}


export namespace IRepository {
  export const $ = Symbol('IRepository');
}
