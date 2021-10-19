import { IEntity } from '../core/interfaces/IEntity';
import { IRepositoryFilter } from '../core/interfaces/IRepository';
import { OrderByType } from '../core/interfaces/IOrderByType';

export type GetAllDto<T extends IEntity> = {
  where?: IRepositoryFilter<T>
  orderBy?: OrderByType<T>
}