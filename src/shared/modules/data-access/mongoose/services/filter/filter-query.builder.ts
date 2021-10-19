import { Filter } from '@nestjs-query/core';
import { Document, FilterQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { WhereBuilder } from './where.builder';

@Injectable()
export class FilterQueryBuilder<Entity extends Document> {
  constructor(
    readonly whereBuilder: WhereBuilder<Entity> = new WhereBuilder<Entity>(),
  ) {}

  buildIdFilterQuery(
    id: unknown | unknown[],
    filter?: Filter<Entity>,
  ): FilterQuery<Entity> {
    return {
      ...this.buildFilterQuery(filter),
      _id: Array.isArray(id) ? { $in: id } : id,
    };
  }

  /**
   * Applies the filters from a Query to a `typeorm` QueryBuilder.
   *
   * @param filter - the filters.
   */
  buildFilterQuery(filter?: Filter<Entity>): FilterQuery<Entity> {
    if (!filter) {
      return {};
    }
    return this.whereBuilder.build(filter);
  }
}
