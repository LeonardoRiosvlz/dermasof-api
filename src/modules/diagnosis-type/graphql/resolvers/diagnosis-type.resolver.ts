import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDiagnosisTypeInput } from '../dto/inputs/create-diagnosis-type.input';
import { DiagnosisTypeResponse } from '../dto/responses/diagnosis-type.response';
import { GetAllDiagnosisTypeInput } from '../dto/inputs/get-all-diagnosis-type.input';
import { DeleteDiagnosisTypeInput } from '../dto/inputs/delete-diagnosis-type.input';
import { CreateDiagnosisTypeCommand } from '../../cqrs/commands/impl/create-diagnosis-type.command';
import { DeleteDiagnosisTypeCommand } from '../../cqrs/commands/impl/delete-diagnosis-type.command';
import { GetAllDiagnosisTypeQuery } from '../../cqrs/queries/impl/get-all-diagnosis-type.query';
import { DiagnosisTypeMapper } from '../../mapper/diagnosis-type.mapper';
import { UpdateDiagnosisTypeInput } from '../dto/inputs/update-diagnosis-type.input';
import { UpdateDiagnosisTypeCommand } from '../../cqrs/commands/impl/update-diagnosis-type.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDiagnosisTypeInput } from '../dto/inputs/get-paginated-diagnosis-type.input';
import { PaginatedDiagnosisTypeResponse } from '../dto/responses/paginated-diagnosis-type.response';
import { GetPaginatedDiagnosisTypeQuery } from '../../cqrs/queries/impl/get-paginated-diagnosis-type.query';
import { GetOneDiagnosisTypeInput } from '../dto/inputs/get-one-diagnosis-type.input';
import { GetOneDiagnosisTypeQuery } from '../../cqrs/queries/impl/get-one-diagnosis-type.query';
import { DeleteManyDiagnosisTypeInput } from '../dto/inputs/delete-many-diagnosis-type.input';
import { DeleteManyDiagnosisTypeCommand } from '../../cqrs/commands/impl/delete-many-diagnosis-type.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DiagnosisTypeEntity } from '../../entities/diagnosis-type.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => DiagnosisTypeResponse)
export class DiagnosisTypeResolver extends BaseResolver {
  constructor(
    private readonly _diagnosisTypeMapper: DiagnosisTypeMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDiagnosisType(
    @Args('input') input: CreateDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDiagnosisTypeCommand(
      this._diagnosisTypeMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDiagnosisType(
    @Args('input') { update, entityId }: UpdateDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDiagnosisTypeCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDiagnosisType(
    @Args('input') { entityId }: DeleteDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDiagnosisTypeCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDiagnosisType(
    @Args('input') input: DeleteManyDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDiagnosisTypeCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DiagnosisTypeResponse])
  async getAllDiagnosisType(
    @Args('input', { nullable: true }) input: GetAllDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DiagnosisTypeResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DiagnosisTypeEntity>>>(new GetAllDiagnosisTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._diagnosisTypeMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.GET_ONE})
  @Query(() => DiagnosisTypeResponse, { nullable: true })
  async getOneDiagnosisType(
    @Args('input', { nullable: true }) input: GetOneDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DiagnosisTypeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DiagnosisTypeEntity>>(new GetOneDiagnosisTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._diagnosisTypeMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DIAGNOSIS_TYPE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDiagnosisTypeResponse, { nullable: true })
  async getPaginatedDiagnosisType(
    @Args('input', { nullable: true }) input: GetPaginatedDiagnosisTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDiagnosisTypeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DiagnosisTypeEntity>>>(new GetPaginatedDiagnosisTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._diagnosisTypeMapper.persistent2Dto),
    };
  }


}
