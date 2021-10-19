import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePatientDataSettingsInput } from '../dto/inputs/create-patient-data-settings.input';
import { PatientDataSettingsResponse } from '../dto/responses/patient-data-settings.response';
import { GetAllPatientDataSettingsInput } from '../dto/inputs/get-all-patient-data-settings.input';
import { DeletePatientDataSettingsInput } from '../dto/inputs/delete-patient-data-settings.input';
import { CreatePatientDataSettingsCommand } from '../../cqrs/commands/impl/create-patient-data-settings.command';
import { DeletePatientDataSettingsCommand } from '../../cqrs/commands/impl/delete-patient-data-settings.command';
import { GetAllPatientDataSettingsQuery } from '../../cqrs/queries/impl/get-all-patient-data-settings.query';
import { PatientDataSettingsMapper } from '../../mapper/patient-data-settings.mapper';
import { UpdatePatientDataSettingsInput } from '../dto/inputs/update-patient-data-settings.input';
import { UpdatePatientDataSettingsCommand } from '../../cqrs/commands/impl/update-patient-data-settings.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPatientDataSettingsInput } from '../dto/inputs/get-paginated-patient-data-settings.input';
import { PaginatedPatientDataSettingsResponse } from '../dto/responses/paginated-patient-data-settings.response';
import { GetPaginatedPatientDataSettingsQuery } from '../../cqrs/queries/impl/get-paginated-patient-data-settings.query';
import { GetOnePatientDataSettingsInput } from '../dto/inputs/get-one-patient-data-settings.input';
import { GetOnePatientDataSettingsQuery } from '../../cqrs/queries/impl/get-one-patient-data-settings.query';
import { DeleteManyPatientDataSettingsInput } from '../dto/inputs/delete-many-patient-data-settings.input';
import { DeleteManyPatientDataSettingsCommand } from '../../cqrs/commands/impl/delete-many-patient-data-settings.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PatientDataSettingsEntity } from '../../entities/patient-data-settings.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => PatientDataSettingsResponse)
export class PatientDataSettingsResolver extends BaseResolver {
  constructor(
    private readonly _patientDataSettingsMapper: PatientDataSettingsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPatientDataSettings(
    @Args('input') input: CreatePatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePatientDataSettingsCommand(
      this._patientDataSettingsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePatientDataSettings(
    @Args('input') { update, entityId }: UpdatePatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePatientDataSettingsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePatientDataSettings(
    @Args('input') { entityId }: DeletePatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePatientDataSettingsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPatientDataSettings(
    @Args('input') input: DeleteManyPatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPatientDataSettingsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PatientDataSettingsResponse])
  async getAllPatientDataSettings(
    @Args('input', { nullable: true }) input: GetAllPatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PatientDataSettingsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PatientDataSettingsEntity>>>(new GetAllPatientDataSettingsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._patientDataSettingsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.GET_ONE})
  @Query(() => PatientDataSettingsResponse, { nullable: true })
  async getOnePatientDataSettings(
    @Args('input', { nullable: true }) input: GetOnePatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PatientDataSettingsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PatientDataSettingsEntity>>(new GetOnePatientDataSettingsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._patientDataSettingsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PATIENT_DATA_SETTINGS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPatientDataSettingsResponse, { nullable: true })
  async getPaginatedPatientDataSettings(
    @Args('input', { nullable: true }) input: GetPaginatedPatientDataSettingsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPatientDataSettingsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PatientDataSettingsEntity>>>(new GetPaginatedPatientDataSettingsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._patientDataSettingsMapper.persistent2Dto),
    };
  }


}
