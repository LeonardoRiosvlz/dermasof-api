import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateServiceInput } from '../dto/inputs/create-service.input';
import { ServiceResponse } from '../dto/responses/service.response';
import { GetAllServiceInput } from '../dto/inputs/get-all-service.input';
import { DeleteServiceInput } from '../dto/inputs/delete-service.input';
import { CreateServiceCommand } from '../../cqrs/commands/impl/create-service.command';
import { DeleteServiceCommand } from '../../cqrs/commands/impl/delete-service.command';
import { GetAllServiceQuery } from '../../cqrs/queries/impl/get-all-service.query';
import { ServiceMapper } from '../../mapper/service.mapper';
import { UpdateServiceInput } from '../dto/inputs/update-service.input';
import { UpdateServiceCommand } from '../../cqrs/commands/impl/update-service.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedServiceInput } from '../dto/inputs/get-paginated-service.input';
import { PaginatedServiceResponse } from '../dto/responses/paginated-service.response';
import { GetPaginatedServiceQuery } from '../../cqrs/queries/impl/get-paginated-service.query';
import { GetOneServiceInput } from '../dto/inputs/get-one-service.input';
import { GetOneServiceQuery } from '../../cqrs/queries/impl/get-one-service.query';
import { DeleteManyServiceInput } from '../dto/inputs/delete-many-service.input';
import { DeleteManyServiceCommand } from '../../cqrs/commands/impl/delete-many-service.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ServiceEntity } from '../../entities/service.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ServiceCategoryEntity } from '../../modules/service-category/entities/service-category.entity';
import { GetOneServiceCategoryQuery } from '../../modules/service-category/cqrs/queries/impl/get-one-service-category.query';

@Resolver(() => ServiceResponse)
export class ServiceResolver extends BaseResolver {
  constructor(
    private readonly _serviceMapper: ServiceMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createService(
    @Args('input') input: CreateServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateServiceCommand(
      this._serviceMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateService(
    @Args('input') { update, entityId }: UpdateServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateServiceCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteService(
    @Args('input') { entityId }: DeleteServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteServiceCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyService(
    @Args('input') input: DeleteManyServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyServiceCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ServiceResponse])
  async getAllService(
    @Args('input', { nullable: true }) input: GetAllServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ServiceResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ServiceEntity>>>(new GetAllServiceQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._serviceMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.GET_ONE})
  @Query(() => ServiceResponse, { nullable: true })
  async getOneService(
    @Args('input', { nullable: true }) input: GetOneServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ServiceResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ServiceEntity>>(new GetOneServiceQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._serviceMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedServiceResponse, { nullable: true })
  async getPaginatedService(
    @Args('input', { nullable: true }) input: GetPaginatedServiceInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedServiceResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ServiceEntity>>>(new GetPaginatedServiceQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._serviceMapper.persistent2Dto),
    };
  }




  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async category(@Parent() parent?: ServiceResponse): Promise<SolvedEntityResponse> {
    if (parent?.category) {
      const compositionOrErr = await this._cqrsBus.execQuery<Result<ServiceCategoryEntity>>(new GetOneServiceCategoryQuery({where:{
          id: {eq: parent.category.id}
        }}));
      if (compositionOrErr.isFailure) {
        return null;
      }
      const category = compositionOrErr.unwrap();
      return {
        id: category.id,
        entityName: ServiceCategoryEntity.name,
        identifier: category.name
      }

    }
  }




}
