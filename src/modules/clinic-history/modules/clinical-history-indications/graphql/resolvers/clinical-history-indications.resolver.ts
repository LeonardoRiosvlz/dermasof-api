import { Args, Mutation, Query, Resolver,Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClinicalHistoryIndicationsInput } from '../dto/inputs/create-clinical-history-indications.input';
import { ClinicalHistoryIndicationsResponse } from '../dto/responses/clinical-history-indications.response';
import { GetAllClinicalHistoryIndicationsInput } from '../dto/inputs/get-all-clinical-history-indications.input';
import { DeleteClinicalHistoryIndicationsInput } from '../dto/inputs/delete-clinical-history-indications.input';
import { CreateClinicalHistoryIndicationsCommand } from '../../cqrs/commands/impl/create-clinical-history-indications.command';
import { DeleteClinicalHistoryIndicationsCommand } from '../../cqrs/commands/impl/delete-clinical-history-indications.command';
import { GetAllClinicalHistoryIndicationsQuery } from '../../cqrs/queries/impl/get-all-clinical-history-indications.query';
import { ClinicalHistoryIndicationsMapper } from '../../mapper/clinical-history-indications.mapper';
import { UpdateClinicalHistoryIndicationsInput } from '../dto/inputs/update-clinical-history-indications.input';
import { UpdateClinicalHistoryIndicationsCommand } from '../../cqrs/commands/impl/update-clinical-history-indications.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClinicalHistoryIndicationsInput } from '../dto/inputs/get-paginated-clinical-history-indications.input';
import { PaginatedClinicalHistoryIndicationsResponse } from '../dto/responses/paginated-clinical-history-indications.response';
import { GetPaginatedClinicalHistoryIndicationsQuery } from '../../cqrs/queries/impl/get-paginated-clinical-history-indications.query';
import { GetOneClinicalHistoryIndicationsInput } from '../dto/inputs/get-one-clinical-history-indications.input';
import { GetOneClinicalHistoryIndicationsQuery } from '../../cqrs/queries/impl/get-one-clinical-history-indications.query';
import { DeleteManyClinicalHistoryIndicationsInput } from '../dto/inputs/delete-many-clinical-history-indications.input';
import { DeleteManyClinicalHistoryIndicationsCommand } from '../../cqrs/commands/impl/delete-many-clinical-history-indications.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClinicalHistoryIndicationsEntity } from '../../entities/clinical-history-indications.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClinicHistoryEntity } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { GetOneClinicHistoryQuery } from 'src/modules/clinic-history/cqrs/queries/impl/get-one-clinic-history.query';
import { IndicationsPatientEntity } from 'src/modules/indications-patient/entities/indications-patient.entity';
import { GetOneIndicationsPatientQuery } from 'src/modules/indications-patient/cqrs/queries/impl/get-one-indications-patient.query';


@Resolver(() => ClinicalHistoryIndicationsResponse)
export class ClinicalHistoryIndicationsResolver extends BaseResolver {
  constructor(
    private readonly _clinicalHistoryIndicationsMapper: ClinicalHistoryIndicationsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClinicalHistoryIndications(
    @Args('input') input: CreateClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClinicalHistoryIndicationsCommand(
      this._clinicalHistoryIndicationsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClinicalHistoryIndications(
    @Args('input') { update, entityId }: UpdateClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClinicalHistoryIndicationsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClinicalHistoryIndications(
    @Args('input') { entityId }: DeleteClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClinicalHistoryIndicationsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClinicalHistoryIndications(
    @Args('input') input: DeleteManyClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClinicalHistoryIndicationsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClinicalHistoryIndicationsResponse])
  async getAllClinicalHistoryIndications(
    @Args('input', { nullable: true }) input: GetAllClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClinicalHistoryIndicationsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClinicalHistoryIndicationsEntity>>>(new GetAllClinicalHistoryIndicationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clinicalHistoryIndicationsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClinicalHistoryIndicationsResponse, { nullable: true })
  async getOneClinicalHistoryIndications(
    @Args('input', { nullable: true }) input: GetOneClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClinicalHistoryIndicationsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClinicalHistoryIndicationsEntity>>(new GetOneClinicalHistoryIndicationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clinicalHistoryIndicationsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINICAL_HISTORY_INDICATIONS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClinicalHistoryIndicationsResponse, { nullable: true })
  async getPaginatedClinicalHistoryIndications(
    @Args('input', { nullable: true }) input: GetPaginatedClinicalHistoryIndicationsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClinicalHistoryIndicationsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClinicalHistoryIndicationsEntity>>>(new GetPaginatedClinicalHistoryIndicationsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clinicalHistoryIndicationsMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async clinicHistory(@Parent() parent?: ClinicalHistoryIndicationsResponse): Promise<SolvedEntityResponse> {
    if (parent?.clinicHistory) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<ClinicHistoryEntity>>(new GetOneClinicHistoryQuery({where:{
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
  async diagnosisType(@Parent() parent?: ClinicalHistoryIndicationsResponse): Promise<SolvedEntityResponse> {
    if (parent?.indications) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<IndicationsPatientEntity>>(new GetOneIndicationsPatientQuery({where:{
             id: {eq: parent.indications.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const indications = patientOrErr.unwrap();

        return {
          id: indications.id,
          entityName: IndicationsPatientEntity.name,
          identifier: indications.description,
          fields: [
 
          ]
        }
    }
  }



}
