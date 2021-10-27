import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateConsultationTypeInput } from '../dto/inputs/create-consultation-type.input';
import { ConsultationTypeResponse } from '../dto/responses/consultation-type.response';
import { GetAllConsultationTypeInput } from '../dto/inputs/get-all-consultation-type.input';
import { DeleteConsultationTypeInput } from '../dto/inputs/delete-consultation-type.input';
import { CreateConsultationTypeCommand } from '../../cqrs/commands/impl/create-consultation-type.command';
import { DeleteConsultationTypeCommand } from '../../cqrs/commands/impl/delete-consultation-type.command';
import { GetAllConsultationTypeQuery } from '../../cqrs/queries/impl/get-all-consultation-type.query';
import { ConsultationTypeMapper } from '../../mapper/consultation-type.mapper';
import { UpdateConsultationTypeInput } from '../dto/inputs/update-consultation-type.input';
import { UpdateConsultationTypeCommand } from '../../cqrs/commands/impl/update-consultation-type.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedConsultationTypeInput } from '../dto/inputs/get-paginated-consultation-type.input';
import { PaginatedConsultationTypeResponse } from '../dto/responses/paginated-consultation-type.response';
import { GetPaginatedConsultationTypeQuery } from '../../cqrs/queries/impl/get-paginated-consultation-type.query';
import { GetOneConsultationTypeInput } from '../dto/inputs/get-one-consultation-type.input';
import { GetOneConsultationTypeQuery } from '../../cqrs/queries/impl/get-one-consultation-type.query';
import { DeleteManyConsultationTypeInput } from '../dto/inputs/delete-many-consultation-type.input';
import { DeleteManyConsultationTypeCommand } from '../../cqrs/commands/impl/delete-many-consultation-type.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ConsultationTypeEntity } from '../../entities/consultation-type.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ServiceEntity } from 'src/modules/service/entities/service.entity';
import { GetOneServiceQuery } from 'src/modules/service/cqrs/queries/impl/get-one-service.query';

@Resolver(() => ConsultationTypeResponse)
export class ConsultationTypeResolver extends BaseResolver {
  constructor(
    private readonly _consultationTypeMapper: ConsultationTypeMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createConsultationType(
    @Args('input') input: CreateConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateConsultationTypeCommand(
      this._consultationTypeMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateConsultationType(
    @Args('input') { update, entityId }: UpdateConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateConsultationTypeCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteConsultationType(
    @Args('input') { entityId }: DeleteConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteConsultationTypeCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyConsultationType(
    @Args('input') input: DeleteManyConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyConsultationTypeCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ConsultationTypeResponse])
  async getAllConsultationType(
    @Args('input', { nullable: true }) input: GetAllConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ConsultationTypeResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ConsultationTypeEntity>>>(new GetAllConsultationTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._consultationTypeMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.GET_ONE})
  @Query(() => ConsultationTypeResponse, { nullable: true })
  async getOneConsultationType(
    @Args('input', { nullable: true }) input: GetOneConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ConsultationTypeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ConsultationTypeEntity>>(new GetOneConsultationTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._consultationTypeMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CONSULTATION_TYPE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedConsultationTypeResponse, { nullable: true })
  async getPaginatedConsultationType(
    @Args('input', { nullable: true }) input: GetPaginatedConsultationTypeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedConsultationTypeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ConsultationTypeEntity>>>(new GetPaginatedConsultationTypeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._consultationTypeMapper.persistent2Dto),
    };
  }




  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async service(@Parent() parent?: ConsultationTypeResponse): Promise<SolvedEntityResponse> {
    if (parent?.service) {
      const serviceOrErr = await this._cqrsBus.execQuery<Result<ServiceEntity>>(new GetOneServiceQuery({where:{
          id: {eq: parent.service.id}
        }}));
      if (serviceOrErr.isFailure) {
        return null;
      }
      const service = serviceOrErr.unwrap();
      return {
        id: service.id,
        entityName: ServiceEntity.name,
        identifier: service.name
      }

    }
  }



}
