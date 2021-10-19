import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { Create__name__Input } from '../dto/inputs/create-__name__(kebabCase).input';
import { __name__Response } from '../dto/responses/__name__(kebabCase).response';
import { GetAll__name__Input } from '../dto/inputs/get-all-__name__(kebabCase).input';
import { Delete__name__Input } from '../dto/inputs/delete-__name__(kebabCase).input';
import { Create__name__Command } from '../../cqrs/commands/impl/create-__name__(kebabCase).command';
import { Delete__name__Command } from '../../cqrs/commands/impl/delete-__name__(kebabCase).command';
import { GetAll__name__Query } from '../../cqrs/queries/impl/get-all-__name__(kebabCase).query';
import { __name__Mapper } from '../../mapper/__name__(kebabCase).mapper';
import { Update__name__Input } from '../dto/inputs/update-__name__(kebabCase).input';
import { Update__name__Command } from '../../cqrs/commands/impl/update-__name__(kebabCase).command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginated__name__Input } from '../dto/inputs/get-paginated-__name__(kebabCase).input';
import { Paginated__name__Response } from '../dto/responses/paginated-__name__(kebabCase).response';
import { GetPaginated__name__Query } from '../../cqrs/queries/impl/get-paginated-__name__(kebabCase).query';
import { GetOne__name__Input } from '../dto/inputs/get-one-__name__(kebabCase).input';
import { GetOne__name__Query } from '../../cqrs/queries/impl/get-one-__name__(kebabCase).query';
import { DeleteMany__name__Input } from '../dto/inputs/delete-many-__name__(kebabCase).input';
import { DeleteMany__name__Command } from '../../cqrs/commands/impl/delete-many-__name__(kebabCase).command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { __name__Entity } from '../../entities/__name__(kebabCase).entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => __name__Response)
export class __name__Resolver extends BaseResolver {
  constructor(
    private readonly ___name__CamelCase__Mapper: __name__Mapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async create__name__(
    @Args('input') input: Create__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new Create__name__Command(
      this.___name__CamelCase__Mapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async update__name__(
    @Args('input') { update, entityId }: Update__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new Update__name__Command(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async delete__name__(
    @Args('input') { entityId }: Delete__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new Delete__name__Command(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteMany__name__(
    @Args('input') input: DeleteMany__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteMany__name__Command(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[__name__Response])
  async getAll__name__(
    @Args('input', { nullable: true }) input: GetAll__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<__name__Response>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<__name__Entity>>>(new GetAll__name__Query(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this.___name__CamelCase__Mapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.GET_ONE})
  @Query(() => __name__Response, { nullable: true })
  async getOne__name__(
    @Args('input', { nullable: true }) input: GetOne__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<__name__Response> {
    const resp = await this._cqrsBus.execQuery<Result<__name__Entity>>(new GetOne__name__Query(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this.___name__CamelCase__Mapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['__name__(constantCase)'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => Paginated__name__Response, { nullable: true })
  async getPaginated__name__(
    @Args('input', { nullable: true }) input: GetPaginated__name__Input,
    @CurrentLanguage() lang?: string,
  ): Promise<Paginated__name__Response> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<__name__Entity>>>(new GetPaginated__name__Query(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this.___name__CamelCase__Mapper.persistent2Dto),
    };
  }


}
