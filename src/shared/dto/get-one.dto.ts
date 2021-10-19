import { IEntity } from '../core/interfaces/IEntity';
import { IRepositoryFilter } from '../core/interfaces/IRepository';

export type GetOneDto<T extends IEntity> = {
  where?: IRepositoryFilter<T>
}