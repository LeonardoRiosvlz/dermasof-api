import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateMedicalSpecialtiesInput } from '../dto/inputs/create-medical-specialties.input';
import { MedicalSpecialtiesResponse } from '../dto/responses/medical-specialties.response';
import { GetAllMedicalSpecialtiesInput } from '../dto/inputs/get-all-medical-specialties.input';
import { DeleteMedicalSpecialtiesInput } from '../dto/inputs/delete-medical-specialties.input';
import { CreateMedicalSpecialtiesCommand } from '../../cqrs/commands/impl/create-medical-specialties.command';
import { DeleteMedicalSpecialtiesCommand } from '../../cqrs/commands/impl/delete-medical-specialties.command';
import { GetAllMedicalSpecialtiesQuery } from '../../cqrs/queries/impl/get-all-medical-specialties.query';
import { MedicalSpecialtiesMapper } from '../../mapper/medical-specialties.mapper';
import { UpdateMedicalSpecialtiesInput } from '../dto/inputs/update-medical-specialties.input';
import { UpdateMedicalSpecialtiesCommand } from '../../cqrs/commands/impl/update-medical-specialties.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedMedicalSpecialtiesInput } from '../dto/inputs/get-paginated-medical-specialties.input';
import { PaginatedMedicalSpecialtiesResponse } from '../dto/responses/paginated-medical-specialties.response';
import { GetPaginatedMedicalSpecialtiesQuery } from '../../cqrs/queries/impl/get-paginated-medical-specialties.query';
import { GetOneMedicalSpecialtiesInput } from '../dto/inputs/get-one-medical-specialties.input';
import { GetOneMedicalSpecialtiesQuery } from '../../cqrs/queries/impl/get-one-medical-specialties.query';
import { DeleteManyMedicalSpecialtiesInput } from '../dto/inputs/delete-many-medical-specialties.input';
import { DeleteManyMedicalSpecialtiesCommand } from '../../cqrs/commands/impl/delete-many-medical-specialties.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { MedicalSpecialtiesEntity } from '../../entities/medical-specialties.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => MedicalSpecialtiesResponse)
export class MedicalSpecialtiesResolver extends BaseResolver {
  constructor(
    private readonly _medicalSpecialtiesMapper: MedicalSpecialtiesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createMedicalSpecialties(
    @Args('input') input: CreateMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateMedicalSpecialtiesCommand(
      this._medicalSpecialtiesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateMedicalSpecialties(
    @Args('input') { update, entityId }: UpdateMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateMedicalSpecialtiesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteMedicalSpecialties(
    @Args('input') { entityId }: DeleteMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteMedicalSpecialtiesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyMedicalSpecialties(
    @Args('input') input: DeleteManyMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyMedicalSpecialtiesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[MedicalSpecialtiesResponse])
  async getAllMedicalSpecialties(
    @Args('input', { nullable: true }) input: GetAllMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MedicalSpecialtiesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<MedicalSpecialtiesEntity>>>(new GetAllMedicalSpecialtiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._medicalSpecialtiesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.GET_ONE})
  @Query(() => MedicalSpecialtiesResponse, { nullable: true })
  async getOneMedicalSpecialties(
    @Args('input', { nullable: true }) input: GetOneMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<MedicalSpecialtiesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<MedicalSpecialtiesEntity>>(new GetOneMedicalSpecialtiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._medicalSpecialtiesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICAL_SPECIALTIES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedMedicalSpecialtiesResponse, { nullable: true })
  async getPaginatedMedicalSpecialties(
    @Args('input', { nullable: true }) input: GetPaginatedMedicalSpecialtiesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedMedicalSpecialtiesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<MedicalSpecialtiesEntity>>>(new GetPaginatedMedicalSpecialtiesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._medicalSpecialtiesMapper.persistent2Dto),
    };
  }


}
