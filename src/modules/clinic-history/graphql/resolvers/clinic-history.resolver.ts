import { Args, Mutation, Query, Resolver, ResolveField, Parent, Field } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClinicHistoryInput } from '../dto/inputs/create-clinic-history.input';
import { ClinicHistoryResponse } from '../dto/responses/clinic-history.response';
import { GetAllClinicHistoryInput } from '../dto/inputs/get-all-clinic-history.input';
import { DeleteClinicHistoryInput } from '../dto/inputs/delete-clinic-history.input';
import { CreateClinicHistoryCommand } from '../../cqrs/commands/impl/create-clinic-history.command';
import { DeleteClinicHistoryCommand } from '../../cqrs/commands/impl/delete-clinic-history.command';
import { GetAllClinicHistoryQuery } from '../../cqrs/queries/impl/get-all-clinic-history.query';
import { ClinicHistoryMapper } from '../../mapper/clinic-history.mapper';
import { UpdateClinicHistoryInput } from '../dto/inputs/update-clinic-history.input';
import { UpdateClinicHistoryCommand } from '../../cqrs/commands/impl/update-clinic-history.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClinicHistoryInput } from '../dto/inputs/get-paginated-clinic-history.input';
import { PaginatedClinicHistoryResponse } from '../dto/responses/paginated-clinic-history.response';
import { GetPaginatedClinicHistoryQuery } from '../../cqrs/queries/impl/get-paginated-clinic-history.query';
import { GetOneClinicHistoryInput } from '../dto/inputs/get-one-clinic-history.input';
import { GetOneClinicHistoryQuery } from '../../cqrs/queries/impl/get-one-clinic-history.query';
import { DeleteManyClinicHistoryInput } from '../dto/inputs/delete-many-clinic-history.input';
import { DeleteManyClinicHistoryCommand } from '../../cqrs/commands/impl/delete-many-clinic-history.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClinicHistoryEntity } from '../../entities/clinic-history.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { GetOnePatientsQuery } from 'src/modules/patients/cqrs/queries/impl/get-one-patients.query';
import { DiagnosisEntity } from 'src/modules/diagnosis/entities/diagnosis.entity';
import { GetAllDiagnosisQuery } from 'src/modules/diagnosis/cqrs/queries/impl/get-all-diagnosis.query';
import { IndicationsPatientEntity } from 'src/modules/indications-patient/entities/indications-patient.entity';
import { GetAllIndicationsPatientQuery } from 'src/modules/indications-patient/cqrs/queries/impl/get-all-indications-patient.query';

@Resolver(() => ClinicHistoryResponse)
export class ClinicHistoryResolver extends BaseResolver {
  constructor(
    private readonly _clinicHistoryMapper: ClinicHistoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClinicHistory(
    @Args('input') input: CreateClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClinicHistoryCommand(
      this._clinicHistoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClinicHistory(
    @Args('input') { update, entityId }: UpdateClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClinicHistoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClinicHistory(
    @Args('input') { entityId }: DeleteClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClinicHistoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClinicHistory(
    @Args('input') input: DeleteManyClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClinicHistoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClinicHistoryResponse])
  async getAllClinicHistory(
    @Args('input', { nullable: true }) input: GetAllClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClinicHistoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClinicHistoryEntity>>>(new GetAllClinicHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clinicHistoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClinicHistoryResponse, { nullable: true })
  async getOneClinicHistory(
    @Args('input', { nullable: true }) input: GetOneClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClinicHistoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClinicHistoryEntity>>(new GetOneClinicHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clinicHistoryMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClinicHistoryResponse, { nullable: true })
  async getPaginatedClinicHistory(
    @Args('input', { nullable: true }) input: GetPaginatedClinicHistoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClinicHistoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClinicHistoryEntity>>>(new GetPaginatedClinicHistoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clinicHistoryMapper.persistent2Dto),
    };
  }





  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async diagnosis(@Parent() parent?: ClinicHistoryResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.diagnosis) {
      const diagnosisOrErr = await this._cqrsBus.execQuery<Result<Array<DiagnosisEntity>>>(new GetAllDiagnosisQuery({where:{
          id: {in: parent.diagnosis.map(x=>x.id)}
        }}));
      if (diagnosisOrErr.isFailure) {
        return [];
      }
      const diagnosis: Array<DiagnosisEntity> = diagnosisOrErr.unwrap();
      return diagnosis.map((x)=>{
        return {
          id: x.id,
          entityName: GetAllDiagnosisQuery.name,
          identifier: x.code
        }
      })
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async indications(@Parent() parent?: ClinicHistoryResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.indications) {
      const indicationsOrErr = await this._cqrsBus.execQuery<Result<Array<IndicationsPatientEntity>>>(new GetAllIndicationsPatientQuery({where:{
          id: {in: parent.indications.map(x=>x.id)}
        }}));
      if (indicationsOrErr.isFailure) {
        return [];
      }
      const indications: Array<IndicationsPatientEntity> = indicationsOrErr.unwrap();
      return indications.map((x)=>{
        return {
          id: x.id,
          entityName: GetAllDiagnosisQuery.name,
          identifier: x.description
        }
      })
    }
  }




  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: ClinicHistoryResponse): Promise<SolvedEntityResponse> {
    if (parent?.patient) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<PatientsEntity>>(new GetOnePatientsQuery({where:{
             id: {eq: parent.patient.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const patient = patientOrErr.unwrap();

        return {
          id: patient.id,
          entityName: PatientsEntity.name,
          identifier: patient.firstName+" "+patient.firstSurName,
          fields: [
            {
              field: 'documentNumber',
              value: patient.documentNumber
            },
            {
              field: 'documentType',
              value: patient.documentType
            }
          ]
        }
    }
  }






}
