import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateHeadquartersInput } from '../dto/inputs/create-headquarters.input';
import { HeadquartersResponse } from '../dto/responses/headquarters.response';
import { GetAllHeadquartersInput } from '../dto/inputs/get-all-headquarters.input';
import { DeleteHeadquartersInput } from '../dto/inputs/delete-headquarters.input';
import { CreateHeadquartersCommand } from '../../cqrs/commands/impl/create-headquarters.command';
import { DeleteHeadquartersCommand } from '../../cqrs/commands/impl/delete-headquarters.command';
import { GetAllHeadquartersQuery } from '../../cqrs/queries/impl/get-all-headquarters.query';
import { HeadquartersMapper } from '../../mapper/headquarters.mapper';
import { UpdateHeadquartersInput } from '../dto/inputs/update-headquarters.input';
import { UpdateHeadquartersCommand } from '../../cqrs/commands/impl/update-headquarters.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedHeadquartersInput } from '../dto/inputs/get-paginated-headquarters.input';
import { PaginatedHeadquartersResponse } from '../dto/responses/paginated-headquarters.response';
import { GetPaginatedHeadquartersQuery } from '../../cqrs/queries/impl/get-paginated-headquarters.query';
import { GetOneHeadquartersInput } from '../dto/inputs/get-one-headquarters.input';
import { GetOneHeadquartersQuery } from '../../cqrs/queries/impl/get-one-headquarters.query';
import { DeleteManyHeadquartersInput } from '../dto/inputs/delete-many-headquarters.input';
import { DeleteManyHeadquartersCommand } from '../../cqrs/commands/impl/delete-many-headquarters.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { HeadquartersEntity } from '../../entities/headquarters.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from '../../../../shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from '../../../../shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => HeadquartersResponse)
export class HeadquartersResolver extends BaseResolver {
  constructor(
    private readonly _headquartersMapper: HeadquartersMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createHeadquarters(
    @Args('input') input: CreateHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateHeadquartersCommand(
      this._headquartersMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateHeadquarters(
    @Args('input') { update, entityId }: UpdateHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateHeadquartersCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteHeadquarters(
    @Args('input') { entityId }: DeleteHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteHeadquartersCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyHeadquarters(
    @Args('input') input: DeleteManyHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyHeadquartersCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[HeadquartersResponse])
  async getAllHeadquarters(
    @Args('input', { nullable: true }) input: GetAllHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<HeadquartersResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<HeadquartersEntity>>>(new GetAllHeadquartersQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._headquartersMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.GET_ONE})
  @Query(() => HeadquartersResponse, { nullable: true })
  async getOneHeadquarters(
    @Args('input', { nullable: true }) input: GetOneHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<HeadquartersResponse> {
    const resp = await this._cqrsBus.execQuery<Result<HeadquartersEntity>>(new GetOneHeadquartersQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._headquartersMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HEADQUARTERS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedHeadquartersResponse, { nullable: true })
  async getPaginatedHeadquarters(
    @Args('input', { nullable: true }) input: GetPaginatedHeadquartersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedHeadquartersResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<HeadquartersEntity>>>(new GetPaginatedHeadquartersQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._headquartersMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async manager(@Parent() parent?: HeadquartersResponse): Promise<SolvedEntityResponse> {
    if (parent?.manager) {
      const managerOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({where:{
          id: {eq: parent.manager.id}
        }}));
      if (managerOrErr.isFailure) {
        return null;
      }
      const manager = managerOrErr.unwrap();
      return {
        id: manager.id,
        entityName: UserEntity.name,
        identifier: `${manager.firstname} ${manager?.lastname ?? ''}`
      }

    }
  }



}
