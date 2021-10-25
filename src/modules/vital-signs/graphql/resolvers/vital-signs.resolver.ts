import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateVitalSignsInput } from '../dto/inputs/create-vital-signs.input';
import { VitalSignsResponse } from '../dto/responses/vital-signs.response';
import { GetAllVitalSignsInput } from '../dto/inputs/get-all-vital-signs.input';
import { DeleteVitalSignsInput } from '../dto/inputs/delete-vital-signs.input';
import { CreateVitalSignsCommand } from '../../cqrs/commands/impl/create-vital-signs.command';
import { DeleteVitalSignsCommand } from '../../cqrs/commands/impl/delete-vital-signs.command';
import { GetAllVitalSignsQuery } from '../../cqrs/queries/impl/get-all-vital-signs.query';
import { VitalSignsMapper } from '../../mapper/vital-signs.mapper';
import { UpdateVitalSignsInput } from '../dto/inputs/update-vital-signs.input';
import { UpdateVitalSignsCommand } from '../../cqrs/commands/impl/update-vital-signs.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedVitalSignsInput } from '../dto/inputs/get-paginated-vital-signs.input';
import { PaginatedVitalSignsResponse } from '../dto/responses/paginated-vital-signs.response';
import { GetPaginatedVitalSignsQuery } from '../../cqrs/queries/impl/get-paginated-vital-signs.query';
import { GetOneVitalSignsInput } from '../dto/inputs/get-one-vital-signs.input';
import { GetOneVitalSignsQuery } from '../../cqrs/queries/impl/get-one-vital-signs.query';
import { DeleteManyVitalSignsInput } from '../dto/inputs/delete-many-vital-signs.input';
import { DeleteManyVitalSignsCommand } from '../../cqrs/commands/impl/delete-many-vital-signs.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { VitalSignsEntity } from '../../entities/vital-signs.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { GetOnePatientsQuery } from 'src/modules/patients/cqrs/queries/impl/get-one-patients.query';
import { ConsultationTypeEntity } from 'src/modules/consultation-type/entities/consultation-type.entity';
import { GetOneConsultationTypeQuery } from 'src/modules/consultation-type/cqrs/queries/impl/get-one-consultation-type.query';


@Resolver(() => VitalSignsResponse)
export class VitalSignsResolver extends BaseResolver {
  constructor(
    private readonly _vitalSignsMapper: VitalSignsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createVitalSigns(
    @Args('input') input: CreateVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateVitalSignsCommand(
      this._vitalSignsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateVitalSigns(
    @Args('input') { update, entityId }: UpdateVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateVitalSignsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteVitalSigns(
    @Args('input') { entityId }: DeleteVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteVitalSignsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyVitalSigns(
    @Args('input') input: DeleteManyVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyVitalSignsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[VitalSignsResponse])
  async getAllVitalSigns(
    @Args('input', { nullable: true }) input: GetAllVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<VitalSignsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<VitalSignsEntity>>>(new GetAllVitalSignsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._vitalSignsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.GET_ONE})
  @Query(() => VitalSignsResponse, { nullable: true })
  async getOneVitalSigns(
    @Args('input', { nullable: true }) input: GetOneVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<VitalSignsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<VitalSignsEntity>>(new GetOneVitalSignsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._vitalSignsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VITAL_SIGNS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedVitalSignsResponse, { nullable: true })
  async getPaginatedVitalSigns(
    @Args('input', { nullable: true }) input: GetPaginatedVitalSignsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedVitalSignsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<VitalSignsEntity>>>(new GetPaginatedVitalSignsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._vitalSignsMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: VitalSignsResponse): Promise<SolvedEntityResponse> {
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
          identifier: patient.firstName+" "+ patient.firstSurName,
          fields: [
            {
              field: 'firstName',
              value: patient?.firstName
            },
            {
              field: 'lastSurName',
              value: patient?.lastSurName
            }
          ]
        }
    }
  }


  
  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async consultationType(@Parent() parent?: VitalSignsResponse): Promise<SolvedEntityResponse> {
    if (parent?.patient) {
      const consultationTypeOrErr = await this._cqrsBus.execQuery<Result<ConsultationTypeEntity>>(new GetOneConsultationTypeQuery({where:{
             id: {eq: parent.consultationType.id}
        }}));
        if (consultationTypeOrErr.isFailure) {
          return null;
        }
        const consultationType = consultationTypeOrErr.unwrap();

        return {
          id: consultationType.id,
          entityName: PatientsEntity.name,
          identifier: consultationType.name,
        }
    }
  }



}
