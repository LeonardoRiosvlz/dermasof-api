import { IEntity } from '../core/interfaces/IEntity';
import { IRepositoryFilter } from '../core/interfaces/IRepository';
import { IPaginatorParams } from '../core/interfaces/IPaginatorParams';
import { OrderByType } from '../core/interfaces/IOrderByType';

export type GetPaginatedDto<T extends IEntity> = {
  paginator: IPaginatorParams
  where?: IRepositoryFilter<T>
  orderBy?: OrderByType<T>
}