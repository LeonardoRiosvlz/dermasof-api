import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateHabeasDataInput } from '../dto/inputs/create-habeas-data.input';
import { HabeasDataResponse } from '../dto/responses/habeas-data.response';
import { GetAllHabeasDataInput } from '../dto/inputs/get-all-habeas-data.input';
import { DeleteHabeasDataInput } from '../dto/inputs/delete-habeas-data.input';
import { CreateHabeasDataCommand } from '../../cqrs/commands/impl/create-habeas-data.command';
import { DeleteHabeasDataCommand } from '../../cqrs/commands/impl/delete-habeas-data.command';
import { GetAllHabeasDataQuery } from '../../cqrs/queries/impl/get-all-habeas-data.query';
import { HabeasDataMapper } from '../../mapper/habeas-data.mapper';
import { UpdateHabeasDataInput } from '../dto/inputs/update-habeas-data.input';
import { UpdateHabeasDataCommand } from '../../cqrs/commands/impl/update-habeas-data.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedHabeasDataInput } from '../dto/inputs/get-paginated-habeas-data.input';
import { PaginatedHabeasDataResponse } from '../dto/responses/paginated-habeas-data.response';
import { GetPaginatedHabeasDataQuery } from '../../cqrs/queries/impl/get-paginated-habeas-data.query';
import { GetOneHabeasDataInput } from '../dto/inputs/get-one-habeas-data.input';
import { GetOneHabeasDataQuery } from '../../cqrs/queries/impl/get-one-habeas-data.query';
import { DeleteManyHabeasDataInput } from '../dto/inputs/delete-many-habeas-data.input';
import { DeleteManyHabeasDataCommand } from '../../cqrs/commands/impl/delete-many-habeas-data.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { HabeasDataEntity } from '../../entities/habeas-data.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => HabeasDataResponse)
export class HabeasDataResolver extends BaseResolver {
  constructor(
    private readonly _habeasDataMapper: HabeasDataMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createHabeasData(
    @Args('input') input: CreateHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateHabeasDataCommand(
      this._habeasDataMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateHabeasData(
    @Args('input') { update, entityId }: UpdateHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateHabeasDataCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteHabeasData(
    @Args('input') { entityId }: DeleteHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteHabeasDataCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyHabeasData(
    @Args('input') input: DeleteManyHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyHabeasDataCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[HabeasDataResponse])
  async getAllHabeasData(
    @Args('input', { nullable: true }) input: GetAllHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<HabeasDataResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<HabeasDataEntity>>>(new GetAllHabeasDataQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._habeasDataMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.GET_ONE})
  @Query(() => HabeasDataResponse, { nullable: true })
  async getOneHabeasData(
    @Args('input', { nullable: true }) input: GetOneHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<HabeasDataResponse> {
    const resp = await this._cqrsBus.execQuery<Result<HabeasDataEntity>>(new GetOneHabeasDataQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._habeasDataMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['HABEAS_DATA'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedHabeasDataResponse, { nullable: true })
  async getPaginatedHabeasData(
    @Args('input', { nullable: true }) input: GetPaginatedHabeasDataInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedHabeasDataResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<HabeasDataEntity>>>(new GetPaginatedHabeasDataQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._habeasDataMapper.persistent2Dto),
    };
  }


}
