import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePatientSafetyCheckInput } from '../dto/inputs/create-patient-safety-check.input';
import { PatientSafetyCheckResponse } from '../dto/responses/patient-safety-check.response';
import { GetAllPatientSafetyCheckInput } from '../dto/inputs/get-all-patient-safety-check.input';
import { DeletePatientSafetyCheckInput } from '../dto/inputs/delete-patient-safety-check.input';
import { CreatePatientSafetyCheckCommand } from '../../cqrs/commands/impl/create-patient-safety-check.command';
import { DeletePatientSafetyCheckCommand } from '../../cqrs/commands/impl/delete-patient-safety-check.command';
import { GetAllPatientSafetyCheckQuery } from '../../cqrs/queries/impl/get-all-patient-safety-check.query';
import { PatientSafetyCheckMapper } from '../../mapper/patient-safety-check.mapper';
import { UpdatePatientSafetyCheckInput } from '../dto/inputs/update-patient-safety-check.input';
import { UpdatePatientSafetyCheckCommand } from '../../cqrs/commands/impl/update-patient-safety-check.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPatientSafetyCheckInput } from '../dto/inputs/get-paginated-patient-safety-check.input';
import { PaginatedPatientSafetyCheckResponse } from '../dto/responses/paginated-patient-safety-check.response';
import { GetPaginatedPatientSafetyCheckQuery } from '../../cqrs/queries/impl/get-paginated-patient-safety-check.query';
import { GetOnePatientSafetyCheckInput } from '../dto/inputs/get-one-patient-safety-check.input';
import { GetOnePatientSafetyCheckQuery } from '../../cqrs/queries/impl/get-one-patient-safety-check.query';
import { DeleteManyPatientSafetyCheckInput } from '../dto/inputs/delete-many-patient-safety-check.input';
import { DeleteManyPatientSafetyCheckCommand } from '../../cqrs/commands/impl/delete-many-patient-safety-check.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PatientSafetyCheckEntity } from '../../entities/patient-safety-check.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => PatientSafetyCheckResponse)
export class PatientSafetyCheckResolver extends BaseResolver {
  constructor(
    private readonly _patientSafetyCheckMapper: PatientSafetyCheckMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPatientSafetyCheck(
    @Args('input') input: CreatePatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePatientSafetyCheckCommand(
      this._patientSafetyCheckMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePatientSafetyCheck(
    @Args('input') { update, entityId }: UpdatePatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePatientSafetyCheckCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePatientSafetyCheck(
    @Args('input') { entityId }: DeletePatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePatientSafetyCheckCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPatientSafetyCheck(
    @Args('input') input: DeleteManyPatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPatientSafetyCheckCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PatientSafetyCheckResponse])
  async getAllPatientSafetyCheck(
    @Args('input', { nullable: true }) input: GetAllPatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PatientSafetyCheckResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PatientSafetyCheckEntity>>>(new GetAllPatientSafetyCheckQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._patientSafetyCheckMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.GET_ONE})
  @Query(() => PatientSafetyCheckResponse, { nullable: true })
  async getOnePatientSafetyCheck(
    @Args('input', { nullable: true }) input: GetOnePatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PatientSafetyCheckResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PatientSafetyCheckEntity>>(new GetOnePatientSafetyCheckQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._patientSafetyCheckMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_SAFETY_CHECK'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPatientSafetyCheckResponse, { nullable: true })
  async getPaginatedPatientSafetyCheck(
    @Args('input', { nullable: true }) input: GetPaginatedPatientSafetyCheckInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPatientSafetyCheckResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PatientSafetyCheckEntity>>>(new GetPaginatedPatientSafetyCheckQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._patientSafetyCheckMapper.persistent2Dto),
    };
  }


}
