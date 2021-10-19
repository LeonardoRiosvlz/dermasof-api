import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDiagnosisInput } from '../dto/inputs/create-diagnosis.input';
import { DiagnosisResponse } from '../dto/responses/diagnosis.response';
import { GetAllDiagnosisInput } from '../dto/inputs/get-all-diagnosis.input';
import { DeleteDiagnosisInput } from '../dto/inputs/delete-diagnosis.input';
import { CreateDiagnosisCommand } from '../../cqrs/commands/impl/create-diagnosis.command';
import { DeleteDiagnosisCommand } from '../../cqrs/commands/impl/delete-diagnosis.command';
import { GetAllDiagnosisQuery } from '../../cqrs/queries/impl/get-all-diagnosis.query';
import { DiagnosisMapper } from '../../mapper/diagnosis.mapper';
import { UpdateDiagnosisInput } from '../dto/inputs/update-diagnosis.input';
import { UpdateDiagnosisCommand } from '../../cqrs/commands/impl/update-diagnosis.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDiagnosisInput } from '../dto/inputs/get-paginated-diagnosis.input';
import { PaginatedDiagnosisResponse } from '../dto/responses/paginated-diagnosis.response';
import { GetPaginatedDiagnosisQuery } from '../../cqrs/queries/impl/get-paginated-diagnosis.query';
import { GetOneDiagnosisInput } from '../dto/inputs/get-one-diagnosis.input';
import { GetOneDiagnosisQuery } from '../../cqrs/queries/impl/get-one-diagnosis.query';
import { DeleteManyDiagnosisInput } from '../dto/inputs/delete-many-diagnosis.input';
import { DeleteManyDiagnosisCommand } from '../../cqrs/commands/impl/delete-many-diagnosis.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DiagnosisEntity } from '../../entities/diagnosis.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => DiagnosisResponse)
export class DiagnosisResolver extends BaseResolver {
  constructor(
    private readonly _diagnosisMapper: DiagnosisMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDiagnosis(
    @Args('input') input: CreateDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDiagnosisCommand(
      this._diagnosisMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDiagnosis(
    @Args('input') { update, entityId }: UpdateDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDiagnosisCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDiagnosis(
    @Args('input') { entityId }: DeleteDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDiagnosisCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDiagnosis(
    @Args('input') input: DeleteManyDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDiagnosisCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DiagnosisResponse])
  async getAllDiagnosis(
    @Args('input', { nullable: true }) input: GetAllDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DiagnosisResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DiagnosisEntity>>>(new GetAllDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._diagnosisMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.GET_ONE})
  @Query(() => DiagnosisResponse, { nullable: true })
  async getOneDiagnosis(
    @Args('input', { nullable: true }) input: GetOneDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DiagnosisResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DiagnosisEntity>>(new GetOneDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._diagnosisMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDiagnosisResponse, { nullable: true })
  async getPaginatedDiagnosis(
    @Args('input', { nullable: true }) input: GetPaginatedDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDiagnosisResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DiagnosisEntity>>>(new GetPaginatedDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._diagnosisMapper.persistent2Dto),
    };
  }


}
