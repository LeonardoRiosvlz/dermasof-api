import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClinicHistoryDiagnosisInput } from '../dto/inputs/create-clinic-history-diagnosis.input';
import { ClinicHistoryDiagnosisResponse } from '../dto/responses/clinic-history-diagnosis.response';
import { GetAllClinicHistoryDiagnosisInput } from '../dto/inputs/get-all-clinic-history-diagnosis.input';
import { DeleteClinicHistoryDiagnosisInput } from '../dto/inputs/delete-clinic-history-diagnosis.input';
import { CreateClinicHistoryDiagnosisCommand } from '../../cqrs/commands/impl/create-clinic-history-diagnosis.command';
import { DeleteClinicHistoryDiagnosisCommand } from '../../cqrs/commands/impl/delete-clinic-history-diagnosis.command';
import { GetAllClinicHistoryDiagnosisQuery } from '../../cqrs/queries/impl/get-all-clinic-history-diagnosis.query';
import { ClinicHistoryDiagnosisMapper } from '../../mapper/clinic-history-diagnosis.mapper';
import { UpdateClinicHistoryDiagnosisInput } from '../dto/inputs/update-clinic-history-diagnosis.input';
import { UpdateClinicHistoryDiagnosisCommand } from '../../cqrs/commands/impl/update-clinic-history-diagnosis.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClinicHistoryDiagnosisInput } from '../dto/inputs/get-paginated-clinic-history-diagnosis.input';
import { PaginatedClinicHistoryDiagnosisResponse } from '../dto/responses/paginated-clinic-history-diagnosis.response';
import { GetPaginatedClinicHistoryDiagnosisQuery } from '../../cqrs/queries/impl/get-paginated-clinic-history-diagnosis.query';
import { GetOneClinicHistoryDiagnosisInput } from '../dto/inputs/get-one-clinic-history-diagnosis.input';
import { GetOneClinicHistoryDiagnosisQuery } from '../../cqrs/queries/impl/get-one-clinic-history-diagnosis.query';
import { DeleteManyClinicHistoryDiagnosisInput } from '../dto/inputs/delete-many-clinic-history-diagnosis.input';
import { DeleteManyClinicHistoryDiagnosisCommand } from '../../cqrs/commands/impl/delete-many-clinic-history-diagnosis.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClinicHistoryDiagnosisEntity } from '../../entities/clinic-history-diagnosis.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClinicHistoryEntity } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { DiagnosisTypeEntity } from 'src/modules/diagnosis-type/entities/diagnosis-type.entity';
import { DiagnosisEntity } from 'src/modules/diagnosis/entities/diagnosis.entity';
import { GetOneDiagnosisQuery } from 'src/modules/diagnosis/cqrs/queries/impl/get-one-diagnosis.query';
import { GetOneDiagnosisTypeQuery } from 'src/modules/diagnosis-type/cqrs/queries/impl/get-one-diagnosis-type.query';


@Resolver(() => ClinicHistoryDiagnosisResponse)
export class ClinicHistoryDiagnosisResolver extends BaseResolver {
  constructor(
    private readonly _clinicHistoryDiagnosisMapper: ClinicHistoryDiagnosisMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClinicHistoryDiagnosis(
    @Args('input') input: CreateClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClinicHistoryDiagnosisCommand(
      this._clinicHistoryDiagnosisMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClinicHistoryDiagnosis(
    @Args('input') { update, entityId }: UpdateClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClinicHistoryDiagnosisCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClinicHistoryDiagnosis(
    @Args('input') { entityId }: DeleteClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClinicHistoryDiagnosisCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClinicHistoryDiagnosis(
    @Args('input') input: DeleteManyClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClinicHistoryDiagnosisCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClinicHistoryDiagnosisResponse])
  async getAllClinicHistoryDiagnosis(
    @Args('input', { nullable: true }) input: GetAllClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClinicHistoryDiagnosisResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClinicHistoryDiagnosisEntity>>>(new GetAllClinicHistoryDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clinicHistoryDiagnosisMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClinicHistoryDiagnosisResponse, { nullable: true })
  async getOneClinicHistoryDiagnosis(
    @Args('input', { nullable: true }) input: GetOneClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClinicHistoryDiagnosisResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClinicHistoryDiagnosisEntity>>(new GetOneClinicHistoryDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clinicHistoryDiagnosisMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_DIAGNOSIS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClinicHistoryDiagnosisResponse, { nullable: true })
  async getPaginatedClinicHistoryDiagnosis(
    @Args('input', { nullable: true }) input: GetPaginatedClinicHistoryDiagnosisInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClinicHistoryDiagnosisResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClinicHistoryDiagnosisEntity>>>(new GetPaginatedClinicHistoryDiagnosisQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clinicHistoryDiagnosisMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async clinicHistory(@Parent() parent?: ClinicHistoryDiagnosisResponse): Promise<SolvedEntityResponse> {
    if (parent?.clinicHistory) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<ClinicHistoryEntity>>(new GetOneDiagnosisQuery({where:{
             id: {eq: parent.clinicHistory.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const clinicHistory = patientOrErr.unwrap();

        return {
          id: clinicHistory.id,
          entityName: ClinicHistoryEntity.name,
          identifier: clinicHistory.currentIllness,
          fields: [
            {
              field: 'externalCause',
              value: clinicHistory.externalCause
            }
          ]
        }
    }
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async diagnosisType(@Parent() parent?: ClinicHistoryDiagnosisResponse): Promise<SolvedEntityResponse> {
    if (parent?.diagnosisType) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<DiagnosisTypeEntity>>(new GetOneDiagnosisTypeQuery({where:{
             id: {eq: parent.diagnosisType.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const diagnosisType = patientOrErr.unwrap();

        return {
          id: diagnosisType.id,
          entityName: DiagnosisTypeEntity.name,
          identifier: diagnosisType.name,
          fields: [
            {
              field: 'description',
              value: diagnosisType.description
            }
          ]
        }
    }
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async diagnosis(@Parent() parent?: ClinicHistoryDiagnosisResponse): Promise<SolvedEntityResponse> {
    if (parent?.diagnosis) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<DiagnosisEntity>>(new GetOneDiagnosisQuery({where:{
             id: {eq: parent.diagnosis.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const diagnosis = patientOrErr.unwrap();

        return {
          id: diagnosis.id,
          entityName: DiagnosisTypeEntity.name,
          identifier: diagnosis.code,
          fields: [
            {
              field: 'description',
              value: diagnosis.description
            }
          ]
        }
    }
  }





}
