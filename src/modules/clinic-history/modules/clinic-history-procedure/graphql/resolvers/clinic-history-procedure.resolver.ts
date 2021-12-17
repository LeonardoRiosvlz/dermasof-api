import { Args, Mutation, Query, Resolver,Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClinicHistoryProcedureInput } from '../dto/inputs/create-clinic-history-procedure.input';
import { ClinicHistoryProcedureResponse } from '../dto/responses/clinic-history-procedure.response';
import { GetAllClinicHistoryProcedureInput } from '../dto/inputs/get-all-clinic-history-procedure.input';
import { DeleteClinicHistoryProcedureInput } from '../dto/inputs/delete-clinic-history-procedure.input';
import { CreateClinicHistoryProcedureCommand } from '../../cqrs/commands/impl/create-clinic-history-procedure.command';
import { DeleteClinicHistoryProcedureCommand } from '../../cqrs/commands/impl/delete-clinic-history-procedure.command';
import { GetAllClinicHistoryProcedureQuery } from '../../cqrs/queries/impl/get-all-clinic-history-procedure.query';
import { ClinicHistoryProcedureMapper } from '../../mapper/clinic-history-procedure.mapper';
import { UpdateClinicHistoryProcedureInput } from '../dto/inputs/update-clinic-history-procedure.input';
import { UpdateClinicHistoryProcedureCommand } from '../../cqrs/commands/impl/update-clinic-history-procedure.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClinicHistoryProcedureInput } from '../dto/inputs/get-paginated-clinic-history-procedure.input';
import { PaginatedClinicHistoryProcedureResponse } from '../dto/responses/paginated-clinic-history-procedure.response';
import { GetPaginatedClinicHistoryProcedureQuery } from '../../cqrs/queries/impl/get-paginated-clinic-history-procedure.query';
import { GetOneClinicHistoryProcedureInput } from '../dto/inputs/get-one-clinic-history-procedure.input';
import { GetOneClinicHistoryProcedureQuery } from '../../cqrs/queries/impl/get-one-clinic-history-procedure.query';
import { DeleteManyClinicHistoryProcedureInput } from '../dto/inputs/delete-many-clinic-history-procedure.input';
import { DeleteManyClinicHistoryProcedureCommand } from '../../cqrs/commands/impl/delete-many-clinic-history-procedure.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClinicHistoryProcedureEntity } from '../../entities/clinic-history-procedure.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { RegionEntity } from 'src/modules/region/entities/region.entity';
import { GetAllRegionQuery } from 'src/modules/region/cqrs/queries/impl/get-all-region.query';
import { ProceduresEntity } from 'src/modules/procedures/entities/procedures.entity';
import { GetOneProceduresQuery } from 'src/modules/procedures/cqrs/queries/impl/get-one-procedures.query';


@Resolver(() => ClinicHistoryProcedureResponse)
export class ClinicHistoryProcedureResolver extends BaseResolver {
  constructor(
    private readonly _clinicHistoryProcedureMapper: ClinicHistoryProcedureMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClinicHistoryProcedure(
    @Args('input') input: CreateClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClinicHistoryProcedureCommand(
      this._clinicHistoryProcedureMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClinicHistoryProcedure(
    @Args('input') { update, entityId }: UpdateClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClinicHistoryProcedureCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClinicHistoryProcedure(
    @Args('input') { entityId }: DeleteClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClinicHistoryProcedureCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClinicHistoryProcedure(
    @Args('input') input: DeleteManyClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClinicHistoryProcedureCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClinicHistoryProcedureResponse])
  async getAllClinicHistoryProcedure(
    @Args('input', { nullable: true }) input: GetAllClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClinicHistoryProcedureResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClinicHistoryProcedureEntity>>>(new GetAllClinicHistoryProcedureQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clinicHistoryProcedureMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClinicHistoryProcedureResponse, { nullable: true })
  async getOneClinicHistoryProcedure(
    @Args('input', { nullable: true }) input: GetOneClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClinicHistoryProcedureResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClinicHistoryProcedureEntity>>(new GetOneClinicHistoryProcedureQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clinicHistoryProcedureMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLINIC_HISTORY_PROCEDURE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClinicHistoryProcedureResponse, { nullable: true })
  async getPaginatedClinicHistoryProcedure(
    @Args('input', { nullable: true }) input: GetPaginatedClinicHistoryProcedureInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClinicHistoryProcedureResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClinicHistoryProcedureEntity>>>(new GetPaginatedClinicHistoryProcedureQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clinicHistoryProcedureMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async region(@Parent() parent?: ClinicHistoryProcedureResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.region) {
      const regionOrErr = await this._cqrsBus.execQuery<Result<Array<RegionEntity>>>(new GetAllRegionQuery({where:{
          id: {in: parent.region.map(x=>x.id)}
        }}));
      if (regionOrErr.isFailure) {
        return [];
      }
      const indications: Array<RegionEntity> = regionOrErr.unwrap();
      return indications.map((x)=>{
        return {
          id: x.id,
          entityName: RegionEntity.name,
          identifier: x.name
        }
      })
    }
  }


  

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async procedureType(@Parent() parent?: ClinicHistoryProcedureResponse): Promise<SolvedEntityResponse> {
    if (parent?.procedureType) {
      const procedureTypeOrErr = await this._cqrsBus.execQuery<Result<ProceduresEntity>>(new GetOneProceduresQuery({where:{
             id: {eq: parent.procedureType.id}
        }}));
        if (procedureTypeOrErr.isFailure) {
          return null;
        }
        const procedureType = procedureTypeOrErr.unwrap();

        return {
          id: procedureType.id,
          entityName: ProceduresEntity.name,
          identifier: procedureType.code,
          fields: [
            {
              field: 'description',
              value: procedureType.description
            }
          ]
        }
    }
  }





}
