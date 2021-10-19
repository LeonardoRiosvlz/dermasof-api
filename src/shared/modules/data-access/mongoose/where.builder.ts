import { FilterableFieldsType } from './types/filterable-fields.type';
import { PersistentEntity } from './base.entity';

import { FilterQuery } from 'mongoose';
import { FilterQueryBuilder } from './services/filter/filter-query.builder';
import { IRepositoryFilter } from '../../../core/interfaces/IRepository';


export const buildWhereFromWhereType = <Entity extends PersistentEntity, FilterableFields extends IRepositoryFilter<Entity>>(
  where: FilterableFieldsType<FilterableFields>,
): FilterQuery<Entity> => {
  // @ts-ignore
  const filterQueryBuilder: FilterQueryBuilder<Entity> = new FilterQueryBuilder<Entity>();
  // @ts-ignore
  return filterQueryBuilder.buildFilterQuery(where);
};

