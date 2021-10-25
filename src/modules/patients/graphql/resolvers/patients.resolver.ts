import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePatientsInput } from '../dto/inputs/create-patients.input';
import { PatientsResponse } from '../dto/responses/patients.response';
import { GetAllPatientsInput } from '../dto/inputs/get-all-patients.input';
import { DeletePatientsInput } from '../dto/inputs/delete-patients.input';
import { CreatePatientsCommand } from '../../cqrs/commands/impl/create-patients.command';
import { DeletePatientsCommand } from '../../cqrs/commands/impl/delete-patients.command';
import { GetAllPatientsQuery } from '../../cqrs/queries/impl/get-all-patients.query';
import { PatientsMapper } from '../../mapper/patients.mapper';
import { UpdatePatientsInput } from '../dto/inputs/update-patients.input';
import { UpdatePatientsCommand } from '../../cqrs/commands/impl/update-patients.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPatientsInput } from '../dto/inputs/get-paginated-patients.input';
import { PaginatedPatientsResponse } from '../dto/responses/paginated-patients.response';
import { GetPaginatedPatientsQuery } from '../../cqrs/queries/impl/get-paginated-patients.query';
import { GetOnePatientsInput } from '../dto/inputs/get-one-patients.input';
import { GetOnePatientsQuery } from '../../cqrs/queries/impl/get-one-patients.query';
import { DeleteManyPatientsInput } from '../dto/inputs/delete-many-patients.input';
import { DeleteManyPatientsCommand } from '../../cqrs/commands/impl/delete-many-patients.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PatientsEntity } from '../../entities/patients.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => PatientsResponse)
export class PatientsResolver extends BaseResolver {
  constructor(
    private readonly _patientsMapper: PatientsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPatients(
    @Args('input') input: CreatePatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePatientsCommand(
      this._patientsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePatients(
    @Args('input') { update, entityId }: UpdatePatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePatientsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePatients(
    @Args('input') { entityId }: DeletePatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePatientsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPatients(
    @Args('input') input: DeleteManyPatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPatientsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PatientsResponse])
  async getAllPatients(
    @Args('input', { nullable: true }) input: GetAllPatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PatientsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PatientsEntity>>>(new GetAllPatientsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._patientsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.GET_ONE})
  @Query(() => PatientsResponse, { nullable: true })
  async getOnePatients(
    @Args('input', { nullable: true }) input: GetOnePatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PatientsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PatientsEntity>>(new GetOnePatientsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._patientsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENTS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPatientsResponse, { nullable: true })
  async getPaginatedPatients(
    @Args('input', { nullable: true }) input: GetPaginatedPatientsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPatientsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PatientsEntity>>>(new GetPaginatedPatientsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._patientsMapper.persistent2Dto),
    };
  }


}
