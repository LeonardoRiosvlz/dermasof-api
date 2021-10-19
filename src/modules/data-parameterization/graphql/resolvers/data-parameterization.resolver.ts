import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDataParameterizationInput } from '../dto/inputs/create-data-parameterization.input';
import { DataParameterizationResponse } from '../dto/responses/data-parameterization.response';
import { GetAllDataParameterizationInput } from '../dto/inputs/get-all-data-parameterization.input';
import { DeleteDataParameterizationInput } from '../dto/inputs/delete-data-parameterization.input';
import { CreateDataParameterizationCommand } from '../../cqrs/commands/impl/create-data-parameterization.command';
import { DeleteDataParameterizationCommand } from '../../cqrs/commands/impl/delete-data-parameterization.command';
import { GetAllDataParameterizationQuery } from '../../cqrs/queries/impl/get-all-data-parameterization.query';
import { DataParameterizationMapper } from '../../mapper/data-parameterization.mapper';
import { UpdateDataParameterizationInput } from '../dto/inputs/update-data-parameterization.input';
import { UpdateDataParameterizationCommand } from '../../cqrs/commands/impl/update-data-parameterization.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDataParameterizationInput } from '../dto/inputs/get-paginated-data-parameterization.input';
import { PaginatedDataParameterizationResponse } from '../dto/responses/paginated-data-parameterization.response';
import { GetPaginatedDataParameterizationQuery } from '../../cqrs/queries/impl/get-paginated-data-parameterization.query';
import { GetOneDataParameterizationInput } from '../dto/inputs/get-one-data-parameterization.input';
import { GetOneDataParameterizationQuery } from '../../cqrs/queries/impl/get-one-data-parameterization.query';
import { DeleteManyDataParameterizationInput } from '../dto/inputs/delete-many-data-parameterization.input';
import { DeleteManyDataParameterizationCommand } from '../../cqrs/commands/impl/delete-many-data-parameterization.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DataParameterizationEntity } from '../../entities/data-parameterization.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => DataParameterizationResponse)
export class DataParameterizationResolver extends BaseResolver {
  constructor(
    private readonly _dataParameterizationMapper: DataParameterizationMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDataParameterization(
    @Args('input') input: CreateDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDataParameterizationCommand(
      this._dataParameterizationMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDataParameterization(
    @Args('input') { update, entityId }: UpdateDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDataParameterizationCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDataParameterization(
    @Args('input') { entityId }: DeleteDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDataParameterizationCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDataParameterization(
    @Args('input') input: DeleteManyDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDataParameterizationCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DataParameterizationResponse])
  async getAllDataParameterization(
    @Args('input', { nullable: true }) input: GetAllDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DataParameterizationResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DataParameterizationEntity>>>(new GetAllDataParameterizationQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._dataParameterizationMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.GET_ONE})
  @Query(() => DataParameterizationResponse, { nullable: true })
  async getOneDataParameterization(
    @Args('input', { nullable: true }) input: GetOneDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DataParameterizationResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DataParameterizationEntity>>(new GetOneDataParameterizationQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._dataParameterizationMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DATA_PARAMETERIZATION'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDataParameterizationResponse, { nullable: true })
  async getPaginatedDataParameterization(
    @Args('input', { nullable: true }) input: GetPaginatedDataParameterizationInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDataParameterizationResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DataParameterizationEntity>>>(new GetPaginatedDataParameterizationQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._dataParameterizationMapper.persistent2Dto),
    };
  }


}
