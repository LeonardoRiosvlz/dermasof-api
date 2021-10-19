import { Logger } from '@nestjs/common';
import { PersistentEntity } from './base.entity';
import { buildWhereFromWhereType } from './where.builder';
import { Connection, FilterQuery, Model, Schema } from 'mongoose';
import { IncludesType, IRepository } from 'src/shared/core/interfaces/IRepository';
import { IPaginatorParams } from 'src/shared/core/interfaces/IPaginatorParams';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { Identifier } from 'src/shared/core/interfaces/IEntity';
import { FilterableFieldsType } from './types/filterable-fields.type';
import { OrderByType } from 'src/shared/core/interfaces/IOrderByType';
import { Result } from '../../../core/class/result';
import { AppError } from '../../../core/errors/AppError';
import { IEntityHooks } from '../../../core/interfaces/IEntityHooks';


export type MongoModelBuild = { connection: Connection, modelName: string, modelSchema?: Schema<any> }

export class BaseRepository<E extends PersistentEntity,
  FilterableFields extends FilterableFieldsType<E>>
  implements IRepository<E, FilterableFields> {

  protected readonly _logger: Logger;

  protected constructor(
    protected  _model: Model<E>,
    context: string,
    protected hooks?: IEntityHooks<E>,
  ) {
    this._logger = new Logger(context);
  }


  setConnection({ connection, modelName, modelSchema }: MongoModelBuild): void {
    this._model = connection.model<E>(modelName, modelSchema);
  }

  protected transform(x?: any): E | null {
    if (!x) {
      return null;
    }
    const entity: any = {};
    Object.keys(x)
      .filter(key => key !== '_id')
      .forEach(key => (entity[key] = x[key]));
    entity.id = x._id.toString();
    return entity;
  }

  async save(entity: E): Promise<void> {
    this._logger.debug(`Save entity with id: {${entity.id}}`);
   await this._model.findByIdAndUpdate(
      entity.id,
      { ...(entity as any) },
      { upsert: true },
    );

    if (this?.hooks && this.hooks?.afterCreate) {
      await this.hooks.afterCreate(entity);
    }
  }

  async updateById(id: Identifier, update: Partial<E>): Promise<void> {

    const updatedEntity = await this._model.findByIdAndUpdate(
      id,
      { ...(update as any) },
    );

    if (this?.hooks && this.hooks?.afterUpdate) {
      await this.hooks.afterUpdate(updatedEntity);
    }
  }

  async updateMany(update: Partial<E>, where?: FilterableFieldsType<FilterableFields>): Promise<void> {

    const toUpdatedEntities = await this._model.find(this.buildWhere(where));
    await this._model.updateMany(this.buildWhere(where), { ...(update as any) });
    if (this?.hooks && this.hooks?.afterUpdate) {
      for (const updated of toUpdatedEntities) {
        await this.hooks.afterUpdate(updated);
      }
    }


  }


  async saveMany(entities: E[]): Promise<void> {
    let subArr = new Array<E>();
    while (entities.length > 0) {
      if (entities.length > 500) subArr = entities.splice(0, 500);
      else subArr = entities.splice(0, entities.length);

      await this._model.create(
        subArr.map((entity: E) => {
          this._logger.debug(`Save entity with id: {${entity.id}}`);
          return entity;
        }) as any,
      );

      if (this?.hooks && this.hooks?.afterCreate) {
        for (const created of subArr) {
          await this.hooks.afterCreate(created);
        }
      }


    }
  }

  async count(where?: FilterableFieldsType<FilterableFields>): Promise<number> {
    return this._model.countDocuments(this.buildWhere(where));
  }


  async drop(entity: E): Promise<void> {
    this._logger.log(`Drop entity with id: {${entity.id}}`);
    const deletedEntity = await this._model.findByIdAndDelete(entity.id.toString());

    if (this?.hooks && this.hooks?.afterDelete) {
      await this.hooks.afterDelete(deletedEntity);
    }
  }

  async dropById(id: Identifier): Promise<void> {
    this._logger.log(`Drop entity with id: {${id}}`);
    const deletedEntity = await this._model.findByIdAndDelete(id.toString());

    if (this?.hooks && this.hooks?.afterDelete) {
      await this.hooks.afterDelete(deletedEntity);
    }
  }

  protected extractLimitAndSkip(pageParam?: IPaginatorParams): SkipAndLimitType {
    const limit = pageParam?.limit || 10;
    const page = pageParam?.page || 1;
    const skip = limit * (page - 1);
    return { skip, take: limit };
  }

  protected extractLimitAndSkipFromRaw(
    pageLimit = 10,
    pageNumber = 1,
  ): SkipAndLimitType {
    const skip = pageLimit * (pageNumber - 1);
    return { skip, take: pageLimit };
  }

  protected buildPaginated<E>(
    skip: number,
    limit: number,
    count: number,
    total: number,
    items: E[],
  ): IPaginatedData<E> {
    const totalPages: number = Math.ceil(total / limit);
    const currentPage: number = Math.min(skip / limit + 1, totalPages);
    return {
      items,
      limit,
      total,
      currentPage,
      totalPages,
    };
  }

  async findById(
    id: Identifier,
    includes: IncludesType<E> = [],
  ): Promise<E | null> {
    const entity = await this._model
      .findById(id.toString())
      .populate(includes.map(field => ({ path: field })))
      .lean();
    return this.transform(entity);
  }

  async findOne(
    where?: FilterableFieldsType<FilterableFields>,
    orderBy?: OrderByType<FilterableFields>,
    includes: IncludesType<E> = [],
  ): Promise<E | null> {
    const entity = await this._model
      .findOne(this.buildWhere(where))
      .sort(this.buildSort(orderBy))
      .populate(includes.map(field => ({ path: field })))
      .lean();
    return this.transform(entity);
  }

  async deleteMany(
    where?: FilterableFieldsType<FilterableFields>,
  ): Promise<void> {

    const entitiesToDelete = await this._model.find(this.buildWhere(where));
    // @ts-ignore
    await this._model.deleteMany(this.buildWhere(where));
    if (this?.hooks && this.hooks?.afterDelete) {
      for (const deletedEntity of entitiesToDelete) {
        await this.hooks.afterDelete(deletedEntity);
      }
    }

  }

  async deleteOne(where?: FilterableFieldsType<FilterableFields>): Promise<void> {
    const deletedEntity = await this._model.findOneAndDelete(this.buildWhere(where));
    if (this?.hooks && this.hooks?.afterDelete) {
      await this.hooks.afterDelete(deletedEntity);
    }
  }

  async getAllPaginated(
    pageParams?: IPaginatorParams,
    where?: FilterableFieldsType<FilterableFields>,
    orderBy?: OrderByType<FilterableFields>,
    includes: IncludesType<E> = [],
  ): Promise<IPaginatedData<E>> {
    const { skip, take } = this.extractLimitAndSkipFromRaw(pageParams?.limit, pageParams?.page);
    const filter = this.buildWhere(where);
    const total = await this._model.countDocuments(filter);
    const items = await this._model
      .find(filter)
      .sort(this.buildSort(orderBy))
      .populate(includes.map(x => ({ path: x })))
      .skip(skip)
      .limit(take)
      .lean();
    const count = items.length;
    return this.buildPaginated(
      skip,
      take,
      count,
      total,
      items.map(this.transform),
    );
  }

  async exist(where: FilterableFieldsType<FilterableFields>): Promise<boolean> {
    return await this._model.exists(this.buildWhere(where));
  }

  protected buildWhere(where: FilterableFieldsType<FilterableFields>): FilterQuery<E> {
    if (!where) {
      return {};
    }
    return buildWhereFromWhereType<E, FilterableFields>(where);
  }

  protected buildSort(orderBy?: OrderByType<FilterableFields>): unknown {
    const fixed = {};
    Object.keys(orderBy ?? {}).forEach(key => fixed[key] = orderBy[key].toString().toLowerCase());
    return fixed;
  }

  async* getAllIterable(
    where?: FilterableFieldsType<FilterableFields>,
    orderBy?: OrderByType<FilterableFields>,
    includes: IncludesType<E> = [],
    bashSize = 10,
  ): AsyncGenerator<Result<E>> {
    let page = 1;
    let hasNext = true;
    do {
      const pageParam: IPaginatorParams = {
        page: page++,
        limit: bashSize,
      };
      if (pageParam.page < 0) {
        hasNext = false;
        return Result.Fail<E>(new AppError.ValidationError('Page Params are Invalid'));
      } else {
        try {
          const { items, currentPage, totalPages } = await this.getAllPaginated(
            { page: pageParam.page, limit: pageParam.limit },
            where,
            orderBy,
            includes,
          );
          hasNext = currentPage < totalPages;
          for (const item of items) yield Result.Ok<E>(item);
        } catch (error) {
          const respErr = new AppError.UnexpectedError(error);
          this._logger.error(respErr);
          yield Result.Fail<E>(respErr);
        }
      }
    } while (hasNext);
  }
}


type SkipAndLimitType = {
  skip: number;
  take: number;
};
