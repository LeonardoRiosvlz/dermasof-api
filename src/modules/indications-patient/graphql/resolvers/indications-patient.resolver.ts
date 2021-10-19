import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateIndicationsPatientInput } from '../dto/inputs/create-indications-patient.input';
import { IndicationsPatientResponse } from '../dto/responses/indications-patient.response';
import { GetAllIndicationsPatientInput } from '../dto/inputs/get-all-indications-patient.input';
import { DeleteIndicationsPatientInput } from '../dto/inputs/delete-indications-patient.input';
import { CreateIndicationsPatientCommand } from '../../cqrs/commands/impl/create-indications-patient.command';
import { DeleteIndicationsPatientCommand } from '../../cqrs/commands/impl/delete-indications-patient.command';
import { GetAllIndicationsPatientQuery } from '../../cqrs/queries/impl/get-all-indications-patient.query';
import { IndicationsPatientMapper } from '../../mapper/indications-patient.mapper';
import { UpdateIndicationsPatientInput } from '../dto/inputs/update-indications-patient.input';
import { UpdateIndicationsPatientCommand } from '../../cqrs/commands/impl/update-indications-patient.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedIndicationsPatientInput } from '../dto/inputs/get-paginated-indications-patient.input';
import { PaginatedIndicationsPatientResponse } from '../dto/responses/paginated-indications-patient.response';
import { GetPaginatedIndicationsPatientQuery } from '../../cqrs/queries/impl/get-paginated-indications-patient.query';
import { GetOneIndicationsPatientInput } from '../dto/inputs/get-one-indications-patient.input';
import { GetOneIndicationsPatientQuery } from '../../cqrs/queries/impl/get-one-indications-patient.query';
import { DeleteManyIndicationsPatientInput } from '../dto/inputs/delete-many-indications-patient.input';
import { DeleteManyIndicationsPatientCommand } from '../../cqrs/commands/impl/delete-many-indications-patient.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { IndicationsPatientEntity } from '../../entities/indications-patient.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => IndicationsPatientResponse)
export class IndicationsPatientResolver extends BaseResolver {
  constructor(
    private readonly _indicationsPatientMapper: IndicationsPatientMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createIndicationsPatient(
    @Args('input') input: CreateIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateIndicationsPatientCommand(
      this._indicationsPatientMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateIndicationsPatient(
    @Args('input') { update, entityId }: UpdateIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateIndicationsPatientCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteIndicationsPatient(
    @Args('input') { entityId }: DeleteIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteIndicationsPatientCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyIndicationsPatient(
    @Args('input') input: DeleteManyIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyIndicationsPatientCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[IndicationsPatientResponse])
  async getAllIndicationsPatient(
    @Args('input', { nullable: true }) input: GetAllIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<IndicationsPatientResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<IndicationsPatientEntity>>>(new GetAllIndicationsPatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._indicationsPatientMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => IndicationsPatientResponse, { nullable: true })
  async getOneIndicationsPatient(
    @Args('input', { nullable: true }) input: GetOneIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<IndicationsPatientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IndicationsPatientEntity>>(new GetOneIndicationsPatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._indicationsPatientMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INDICATIONS_PATIENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedIndicationsPatientResponse, { nullable: true })
  async getPaginatedIndicationsPatient(
    @Args('input', { nullable: true }) input: GetPaginatedIndicationsPatientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedIndicationsPatientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<IndicationsPatientEntity>>>(new GetPaginatedIndicationsPatientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._indicationsPatientMapper.persistent2Dto),
    };
  }


}
