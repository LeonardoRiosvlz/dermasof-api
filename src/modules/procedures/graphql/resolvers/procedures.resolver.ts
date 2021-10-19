import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateProceduresInput } from '../dto/inputs/create-procedures.input';
import { ProceduresResponse } from '../dto/responses/procedures.response';
import { GetAllProceduresInput } from '../dto/inputs/get-all-procedures.input';
import { DeleteProceduresInput } from '../dto/inputs/delete-procedures.input';
import { CreateProceduresCommand } from '../../cqrs/commands/impl/create-procedures.command';
import { DeleteProceduresCommand } from '../../cqrs/commands/impl/delete-procedures.command';
import { GetAllProceduresQuery } from '../../cqrs/queries/impl/get-all-procedures.query';
import { ProceduresMapper } from '../../mapper/procedures.mapper';
import { UpdateProceduresInput } from '../dto/inputs/update-procedures.input';
import { UpdateProceduresCommand } from '../../cqrs/commands/impl/update-procedures.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedProceduresInput } from '../dto/inputs/get-paginated-procedures.input';
import { PaginatedProceduresResponse } from '../dto/responses/paginated-procedures.response';
import { GetPaginatedProceduresQuery } from '../../cqrs/queries/impl/get-paginated-procedures.query';
import { GetOneProceduresInput } from '../dto/inputs/get-one-procedures.input';
import { GetOneProceduresQuery } from '../../cqrs/queries/impl/get-one-procedures.query';
import { DeleteManyProceduresInput } from '../dto/inputs/delete-many-procedures.input';
import { DeleteManyProceduresCommand } from '../../cqrs/commands/impl/delete-many-procedures.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ProceduresEntity } from '../../entities/procedures.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => ProceduresResponse)
export class ProceduresResolver extends BaseResolver {
  constructor(
    private readonly _proceduresMapper: ProceduresMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createProcedures(
    @Args('input') input: CreateProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateProceduresCommand(
      this._proceduresMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateProcedures(
    @Args('input') { update, entityId }: UpdateProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateProceduresCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteProcedures(
    @Args('input') { entityId }: DeleteProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteProceduresCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyProcedures(
    @Args('input') input: DeleteManyProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyProceduresCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ProceduresResponse])
  async getAllProcedures(
    @Args('input', { nullable: true }) input: GetAllProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ProceduresResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ProceduresEntity>>>(new GetAllProceduresQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._proceduresMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.GET_ONE})
  @Query(() => ProceduresResponse, { nullable: true })
  async getOneProcedures(
    @Args('input', { nullable: true }) input: GetOneProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ProceduresResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ProceduresEntity>>(new GetOneProceduresQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._proceduresMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PROCEDURES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedProceduresResponse, { nullable: true })
  async getPaginatedProcedures(
    @Args('input', { nullable: true }) input: GetPaginatedProceduresInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedProceduresResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ProceduresEntity>>>(new GetPaginatedProceduresQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._proceduresMapper.persistent2Dto),
    };
  }


}
