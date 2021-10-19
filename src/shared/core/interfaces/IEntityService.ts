import { Identifier, IEntity } from './IEntity';
import { OrderByType } from './IOrderByType';
import { IPaginatedData } from './IPaginatedData';
import { IPaginatorParams } from './IPaginatorParams';
import { Result } from '../class/result';
import { IncludesType, IRepository, IRepositoryFilter } from './IRepository';


export interface IEntityService<Entity extends IEntity> {

  repo: IRepository<Entity, IRepositoryFilter<Entity>>

  create(entity: Entity): Promise<Result<void>> | Result<void>

  deleteById(id: Identifier): Promise<Result<void>> | Result<void>

  passConnection2Repo(...args: any[]): Promise<Result<void>> | Result<void>

  deleteMany(
    where?: IRepositoryFilter<Entity>,
  ): Promise<Result<void>> | Result<void>

  deleteOne(
    where?: IRepositoryFilter<Entity>,
  ): Promise<Result<void>>

  updateById(id: Identifier, update: Partial<Entity>): Promise<Result<void>> | Result<void>

  updateMany(update: Partial<Entity>, where?: IRepositoryFilter<Entity>): Promise<Result<void>> | Result<void>


  findOne(
    where?: IRepositoryFilter<Entity>,
    orderBy?: OrderByType<Entity>,
    includes?: IncludesType<Entity>,
  ): Promise<Result<Entity>> | Result<Entity>

  getAllPaginated(
    pageParams?: IPaginatorParams,
    where?: IRepositoryFilter<Entity>,
    orderBy?: OrderByType<Entity>,
    includes?: IncludesType<Entity>,
  ): Promise<Result<IPaginatedData<Entity>>> | Result<IPaginatedData<Entity>>;

  getAll(
    where?: IRepositoryFilter<Entity>,
    orderBy?: OrderByType<Entity>,
    includes?: IncludesType<Entity>,
    bashSize?: number): Promise<Result<Array<Entity>>>
}


export namespace IEntityService {
  export const $ = Symbol('IEntityService');
}
