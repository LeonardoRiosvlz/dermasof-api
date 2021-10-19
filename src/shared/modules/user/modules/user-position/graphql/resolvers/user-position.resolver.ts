import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateUserPositionInput } from '../dto/inputs/create-user-position.input';
import { UserPositionResponse } from '../dto/responses/user-position.response';
import { GetAllUserPositionInput } from '../dto/inputs/get-all-user-position.input';
import { DeleteUserPositionInput } from '../dto/inputs/delete-user-position.input';
import { CreateUserPositionCommand } from '../../cqrs/commands/impl/create-user-position.command';
import { DeleteUserPositionCommand } from '../../cqrs/commands/impl/delete-user-position.command';
import { GetAllUserPositionQuery } from '../../cqrs/queries/impl/get-all-user-position.query';
import { UserPositionMapper } from '../../mapper/user-position.mapper';
import { UpdateUserPositionInput } from '../dto/inputs/update-user-position.input';
import { UpdateUserPositionCommand } from '../../cqrs/commands/impl/update-user-position.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedUserPositionInput } from '../dto/inputs/get-paginated-user-position.input';
import { PaginatedUserPositionResponse } from '../dto/responses/paginated-user-position.response';
import { GetPaginatedUserPositionQuery } from '../../cqrs/queries/impl/get-paginated-user-position.query';
import { GetOneUserPositionInput } from '../dto/inputs/get-one-user-position.input';
import { GetOneUserPositionQuery } from '../../cqrs/queries/impl/get-one-user-position.query';
import { DeleteManyUserPositionInput } from '../dto/inputs/delete-many-user-position.input';
import { DeleteManyUserPositionCommand } from '../../cqrs/commands/impl/delete-many-user-position.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { UserPositionEntity } from '../../entities/user-position.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => UserPositionResponse)
export class UserPositionResolver extends BaseResolver {
  constructor(
    private readonly _userPositionMapper: UserPositionMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createUserPosition(
    @Args('input') input: CreateUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateUserPositionCommand(
      this._userPositionMapper.dtoInput2Persistent(input),
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateUserPosition(
    @Args('input') { update, entityId }: UpdateUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateUserPositionCommand(entityId, update));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.DELETE_ONE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteUserPosition(
    @Args('input') { entityId }: DeleteUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteUserPositionCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.DELETE_MANY })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyUserPosition(
    @Args('input') input: DeleteManyUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyUserPositionCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.GET_ALL })
  @Query(() => [UserPositionResponse], { nullable: true })
  async getAllUserPosition(
    @Args('input', { nullable: true }) input: GetAllUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<UserPositionResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<UserPositionEntity>>>(new GetAllUserPositionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._userPositionMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.GET_ONE })
  @Query(() => UserPositionResponse, { nullable: true })
  async getOneUserPosition(
    @Args('input', { nullable: true }) input: GetOneUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<UserPositionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<UserPositionEntity>>(new GetOneUserPositionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._userPositionMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_POSITION'], action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedUserPositionResponse, { nullable: true })
  async getPaginatedUserPosition(
    @Args('input', { nullable: true }) input: GetPaginatedUserPositionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedUserPositionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<UserPositionEntity>>>(new GetPaginatedUserPositionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._userPositionMapper.persistent2Dto),
    };
  }


}
