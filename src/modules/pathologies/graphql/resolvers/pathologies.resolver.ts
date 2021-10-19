import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePathologiesInput } from '../dto/inputs/create-pathologies.input';
import { PathologiesResponse } from '../dto/responses/pathologies.response';
import { GetAllPathologiesInput } from '../dto/inputs/get-all-pathologies.input';
import { DeletePathologiesInput } from '../dto/inputs/delete-pathologies.input';
import { CreatePathologiesCommand } from '../../cqrs/commands/impl/create-pathologies.command';
import { DeletePathologiesCommand } from '../../cqrs/commands/impl/delete-pathologies.command';
import { GetAllPathologiesQuery } from '../../cqrs/queries/impl/get-all-pathologies.query';
import { PathologiesMapper } from '../../mapper/pathologies.mapper';
import { UpdatePathologiesInput } from '../dto/inputs/update-pathologies.input';
import { UpdatePathologiesCommand } from '../../cqrs/commands/impl/update-pathologies.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPathologiesInput } from '../dto/inputs/get-paginated-pathologies.input';
import { PaginatedPathologiesResponse } from '../dto/responses/paginated-pathologies.response';
import { GetPaginatedPathologiesQuery } from '../../cqrs/queries/impl/get-paginated-pathologies.query';
import { GetOnePathologiesInput } from '../dto/inputs/get-one-pathologies.input';
import { GetOnePathologiesQuery } from '../../cqrs/queries/impl/get-one-pathologies.query';
import { DeleteManyPathologiesInput } from '../dto/inputs/delete-many-pathologies.input';
import { DeleteManyPathologiesCommand } from '../../cqrs/commands/impl/delete-many-pathologies.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PathologiesEntity } from '../../entities/pathologies.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => PathologiesResponse)
export class PathologiesResolver extends BaseResolver {
  constructor(
    private readonly _pathologiesMapper: PathologiesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPathologies(
    @Args('input') input: CreatePathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePathologiesCommand(
      this._pathologiesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePathologies(
    @Args('input') { update, entityId }: UpdatePathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePathologiesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePathologies(
    @Args('input') { entityId }: DeletePathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePathologiesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPathologies(
    @Args('input') input: DeleteManyPathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPathologiesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PathologiesResponse])
  async getAllPathologies(
    @Args('input', { nullable: true }) input: GetAllPathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PathologiesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PathologiesEntity>>>(new GetAllPathologiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._pathologiesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.GET_ONE})
  @Query(() => PathologiesResponse, { nullable: true })
  async getOnePathologies(
    @Args('input', { nullable: true }) input: GetOnePathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PathologiesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PathologiesEntity>>(new GetOnePathologiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._pathologiesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATHOLOGIES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPathologiesResponse, { nullable: true })
  async getPaginatedPathologies(
    @Args('input', { nullable: true }) input: GetPaginatedPathologiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPathologiesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PathologiesEntity>>>(new GetPaginatedPathologiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._pathologiesMapper.persistent2Dto),
    };
  }


}
