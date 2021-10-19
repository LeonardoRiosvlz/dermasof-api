import {
  Filter,
} from '@nestjs-query/core';
import { IRepositoryFilter } from 'src/shared/core/interfaces/IRepository';
import { IEntity } from 'src/shared/core/interfaces/IEntity';

export type FilterableFieldsType<T> = Filter<T>  & IRepositoryFilter<T>


// @ts-ignore
export interface IEntityFilter<T extends IEntity> extends FilterableFieldsType<T> {
   id?: string
   createdAt?: Date
   updatedAt?: Date
}