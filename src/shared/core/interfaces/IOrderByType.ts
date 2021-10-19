import { Identifier } from './IEntity';

export type OrderByType<T> = {
  [K in keyof BaseType<T>]?: 'ASC' | 'DESC';
}

type BaseType<T> = T & {
  id?: Identifier
  updatedAt?: Date;
  createdAt?: Date;
}